import { Mail, MapPin, Phone } from "lucide-react";
import { QuoteForm } from "@/components/contact/QuoteForm";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Kontakt & offertförfrågan",
  description:
    "Begär en kostnadsfri offert från Täby Bygg & Montage. Ring 070-023 12 31, mejla info@tbybygg.se eller beskriv ditt projekt i formuläret.",
  path: "/kontakt",
});

const channels = [
  { icon: Phone, label: "Telefon", value: site.phone.display, href: site.phone.href },
  { icon: Mail, label: "E-post", value: site.email, href: `mailto:${site.email}` },
  { icon: InstagramIcon, label: "Instagram", value: site.instagram.handle, href: site.instagram.url, external: true },
  { icon: MapPin, label: "Område", value: site.city },
] as const;

const nextSteps = [
  "Vi läser din förfrågan och hör av oss.",
  "Vi pratar igenom projektet och dina önskemål.",
  "Du får en offert som visar vad som ingår.",
] as const;

export default function ContactPage() {
  return (
    <section aria-labelledby="kontakt-rubrik" className="pt-10 pb-24 sm:pt-14 lg:pt-20 lg:pb-36">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
        <div className="lg:col-span-5 lg:row-start-1">
          <Eyebrow className="animate-rise text-ink-muted">Kontakt</Eyebrow>
          <h1 id="kontakt-rubrik" className="mt-6 animate-rise text-display-xl [animation-delay:80ms]">
            Begär offert.
          </h1>
          <p className="mt-8 max-w-[40ch] animate-rise text-lead text-ink-muted [animation-delay:160ms]">
            Berätta om ditt projekt så återkommer vi. Det kostar ingenting och du förbinder dig inte till något.
          </p>
        </div>

        <div id="offert" className="scroll-mt-24 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1 lg:self-start">
          <h2 className="sr-only">Offertförfrågan</h2>
          <QuoteForm />
        </div>

        <div className="lg:col-span-5 lg:row-start-2">
          <ul className="border-t border-line lg:mt-12">
            {channels.map(({ icon: Icon, label, value, ...link }) => (
              <li key={label} className="grid grid-cols-[2.5rem_1fr] items-center border-b border-line py-4">
                <Icon aria-hidden className="size-5 text-terracotta-ink" />
                <div>
                  <p className="eyebrow text-[0.6875rem] text-slate">{label}</p>
                  {"href" in link ? (
                    <a
                      href={link.href}
                      {...("external" in link && { target: "_blank", rel: "noopener noreferrer" })}
                      className="link-underline mt-1 inline-block font-display text-xl tracking-[-0.015em]"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 font-display text-xl tracking-[-0.015em]">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <h2 className="eyebrow text-slate">Vad händer sen?</h2>
            <ol className="mt-5 space-y-4">
              {nextSteps.map((step, index) => (
                <li key={step} className="grid grid-cols-[2.5rem_1fr] items-baseline">
                  <span className="font-serif text-2xl leading-none text-terracotta-ink italic">{index + 1}</span>
                  <span className="text-ink-muted">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
