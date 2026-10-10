"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Check, ChevronDown, LoaderCircle } from "lucide-react";
import { submitQuote } from "@/app/kontakt/actions";
import { buttonBase } from "@/components/ui/ButtonLink";
import { site } from "@/content/site";
import { type QuoteInput, type QuoteResult, quoteSchema, serviceOptions, spamFields } from "@/lib/quote-schema";
import { cx } from "@/lib/cx";

type Status = Exclude<QuoteResult["status"], "invalid"> | "idle";

const inputClass =
  "block w-full rounded-[2px] border border-navy/20 bg-white px-4 py-3.5 text-base text-navy transition-colors placeholder:text-slate/70 hover:border-navy/40 focus:border-navy focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta aria-invalid:border-[#a33a28]";

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  className?: string;
  children: ReactNode;
};

function Field({ id, label, error, optional, className, children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between gap-4 font-semibold">
        {label}
        {optional && <span className="text-sm font-normal text-ink-muted">Valfritt</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-fel`} className="mt-2 text-sm font-medium text-[#a33a28]">
          {error}
        </p>
      )}
    </div>
  );
}

export function QuoteForm() {
  const id = useId();
  const startedAt = useRef(0);
  const honeypot = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    mode: "onTouched",
    defaultValues: { name: "", email: "", phone: "", service: "", message: "" },
  });

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (status !== "idle") statusRef.current?.focus();
  }, [status]);

  async function send(values: QuoteInput) {
    setStatus("idle");
    let result: QuoteResult;
    try {
      result = await submitQuote({
        ...values,
        [spamFields.honeypot]: honeypot.current?.value ?? "",
        [spamFields.startedAt]: startedAt.current,
      });
    } catch {
      result = { status: "error", message: "Det gick inte att nå servern. Kontrollera anslutningen och försök igen." };
    }

    if (result.status === "invalid") {
      for (const [field, message] of Object.entries(result.fieldErrors)) {
        if (message) setError(field as keyof QuoteInput, { message }, { shouldFocus: true });
      }
      return;
    }
    if (result.status === "error") setErrorMessage(result.message);
    if (result.status === "success") reset();
    setStatus(result.status);
  }

  const fieldId = (name: keyof QuoteInput) => `${id}-${name}`;
  const describedBy = (name: keyof QuoteInput) => (errors[name] ? `${fieldId(name)}-fel` : undefined);

  if (status === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="bg-navy p-8 text-ivory outline-none sm:p-12">
        <span className="flex size-12 items-center justify-center rounded-full bg-terracotta text-navy-deep">
          <Check aria-hidden className="size-6" />
        </span>
        <h3 className="mt-8 text-display-m">Tack för din förfrågan!</h3>
        <p className="mt-4 max-w-[44ch] text-ivory/75">
          Vi har tagit emot ditt meddelande och återkommer så snart vi kan. Är det bråttom når du oss på{" "}
          <a href={site.phone.href} className="font-semibold text-ivory underline underline-offset-4">
            {site.phone.display}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-ivory underline underline-offset-4"
        >
          Skicka en ny förfrågan
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={(event) => handleSubmit(send)(event)} noValidate aria-describedby={`${id}-info`} className="bg-paper p-6 sm:p-10">
      <p id={`${id}-info`} className="text-sm text-ink-muted">
        Alla fält utom telefonnummer är obligatoriska.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field id={fieldId("name")} label="Namn" error={errors.name?.message}>
          <input
            id={fieldId("name")}
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={describedBy("name")}
            className={inputClass}
            {...register("name")}
          />
        </Field>

        <Field id={fieldId("email")} label="E-post" error={errors.email?.message}>
          <input
            id={fieldId("email")}
            type="email"
            autoComplete="email"
            inputMode="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={describedBy("email")}
            className={inputClass}
            {...register("email")}
          />
        </Field>

        <Field id={fieldId("phone")} label="Telefonnummer" optional error={errors.phone?.message}>
          <input
            id={fieldId("phone")}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={describedBy("phone")}
            className={inputClass}
            {...register("phone")}
          />
        </Field>

        <Field id={fieldId("service")} label="Typ av tjänst" error={errors.service?.message}>
          <div className="relative">
            <select
              id={fieldId("service")}
              aria-invalid={errors.service ? true : undefined}
              aria-describedby={describedBy("service")}
              className={cx(inputClass, "appearance-none pr-11")}
              {...register("service")}
            >
              <option value="" disabled>
                Välj tjänst
              </option>
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2" />
          </div>
        </Field>

        <Field
          id={fieldId("message")}
          label="Projektbeskrivning"
          error={errors.message?.message}
          className="sm:col-span-2"
        >
          <textarea
            id={fieldId("message")}
            rows={6}
            placeholder="Berätta kort om projektet – vad som ska göras, var och ungefär när."
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={describedBy("message")}
            className={cx(inputClass, "resize-y")}
            {...register("message")}
          />
        </Field>
      </div>

      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-hp`}>Lämna detta fält tomt</label>
        <input ref={honeypot} id={`${id}-hp`} name={spamFields.honeypot} type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {(status === "error" || status === "unavailable") && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="alert"
          className="mt-8 border-l-2 border-[#a33a28] bg-white p-5 text-[0.95rem] outline-none"
        >
          {status === "unavailable" ? (
            <p>
              Formuläret är inte aktiverat ännu. Ring oss på{" "}
              <a href={site.phone.href} className="font-semibold underline underline-offset-4">
                {site.phone.display}
              </a>{" "}
              eller mejla{" "}
              <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-4">
                {site.email}
              </a>{" "}
              så hjälper vi dig direkt.
            </p>
          ) : (
            <p>
              {errorMessage} Du når oss också på{" "}
              <a href={site.phone.href} className="font-semibold underline underline-offset-4">
                {site.phone.display}
              </a>
              .
            </p>
          )}
        </div>
      )}

      <div className="mt-8 flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[40ch] text-sm text-ink-muted">
          Vi använder uppgifterna för att besvara din förfrågan. Läs mer i vår{" "}
          <Link href="/integritetspolicy" className="font-semibold text-navy underline underline-offset-4">
            integritetspolicy
          </Link>
          .
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className={cx(buttonBase, "shrink-0 bg-navy text-ivory hover:bg-navy-deep disabled:cursor-wait disabled:opacity-80")}
        >
          <span>{isSubmitting ? "Skickar…" : "Skicka förfrågan"}</span>
          {isSubmitting ? (
            <LoaderCircle aria-hidden className="size-4 animate-spin" />
          ) : (
            <ArrowUpRight aria-hidden className="size-4" />
          )}
        </button>
      </div>
    </form>
  );
}
