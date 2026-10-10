"use server";

import { z } from "zod";
import { site } from "@/content/site";
import { type QuoteInput, type QuoteResult, quoteSchema, serviceOptions, spamFields } from "@/lib/quote-schema";

const MIN_FILL_TIME_MS = 3000;
const SEND_FAILED = "Förfrågan kunde inte skickas just nu. Försök igen eller kontakta oss direkt.";

const submissionSchema = quoteSchema.extend({
  [spamFields.honeypot]: z.string().optional(),
  [spamFields.startedAt]: z.coerce.number().optional(),
});

function formatEmail(data: QuoteInput) {
  const service = serviceOptions.find((option) => option.value === data.service)?.label ?? data.service;
  return {
    subject: `Offertförfrågan: ${service} – ${data.name}`.replace(/[\r\n]+/g, " "),
    text: [
      `Ny offertförfrågan via ${site.url}`,
      "",
      `Namn: ${data.name}`,
      `E-post: ${data.email}`,
      `Telefon: ${data.phone || "–"}`,
      `Tjänst: ${service}`,
      "",
      "Projektbeskrivning:",
      data.message,
    ].join("\n"),
  };
}

export async function submitQuote(payload: unknown): Promise<QuoteResult> {
  const parsed = submissionSchema.safeParse(payload);

  if (!parsed.success) {
    const { fieldErrors } = z.flattenError(parsed.error);
    return {
      status: "invalid",
      fieldErrors: Object.fromEntries(
        Object.entries(fieldErrors).map(([field, messages]) => [field, messages?.[0]]),
      ) as Partial<Record<keyof QuoteInput, string>>,
    };
  }

  const { [spamFields.honeypot]: honeypot, [spamFields.startedAt]: startedAt, ...data } = parsed.data;
  if (honeypot || !startedAt || Date.now() - startedAt < MIN_FILL_TIME_MS) {
    return {
      status: "error",
      message: "Förfrågan kunde inte skickas. Vänta några sekunder och försök igen, eller kontakta oss direkt.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.QUOTE_FROM_EMAIL;
  const to = process.env.QUOTE_TO_EMAIL ?? site.email;
  if (!apiKey || !from) {
    console.error("Quote form: RESEND_API_KEY or QUOTE_FROM_EMAIL is not configured.");
    return { status: "unavailable" };
  }

  const { subject, text } = formatEmail(data);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: data.email, subject, text }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      console.error("Quote form: email provider responded with", response.status, await response.text());
      return { status: "error", message: SEND_FAILED };
    }
  } catch (error) {
    console.error("Quote form: request to email provider failed", error);
    return { status: "error", message: SEND_FAILED };
  }

  return { status: "success" };
}
