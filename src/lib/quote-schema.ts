import { z } from "zod";
import { services } from "@/content/services";

export const serviceOptions = [
  ...services.map((service) => ({ value: service.slug, label: service.title })),
  { value: "annat", label: "Annat / vet inte än" },
] as const;

const serviceValues = serviceOptions.map((option) => option.value) as [string, ...string[]];

export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Skriv ditt namn.").max(100, "Namnet får vara högst 100 tecken."),
  email: z
    .string()
    .trim()
    .min(1, "Skriv din e-postadress.")
    .max(200, "E-postadressen är för lång.")
    .pipe(z.email("Ange en giltig e-postadress.")),
  phone: z
    .string()
    .trim()
    .max(30, "Telefonnumret är för långt.")
    .refine((value) => value === "" || /^[+\d][\d\s()-]{5,}$/.test(value), "Ange ett giltigt telefonnummer."),
  service: z.enum(serviceValues, "Välj vilken typ av tjänst det gäller."),
  message: z
    .string()
    .trim()
    .min(20, "Beskriv projektet med minst 20 tecken.")
    .max(4000, "Beskrivningen får vara högst 4 000 tecken."),
});

export type QuoteInput = z.infer<typeof quoteSchema>;

/** Hidden anti-spam fields, validated on the server only. */
export const spamFields = {
  honeypot: "webbplats",
  startedAt: "startad",
} as const;

export type QuoteResult =
  | { status: "success" }
  | { status: "invalid"; fieldErrors: Partial<Record<keyof QuoteInput, string>> }
  | { status: "unavailable" }
  | { status: "error"; message: string };
