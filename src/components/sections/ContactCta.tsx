import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Measure } from "@/components/ui/Measure";
import { Reveal } from "@/components/ui/Reveal";
import { quoteHref, site } from "@/content/site";

type ContactCtaProps = {
  heading?: string;
  text?: string;
};

export function ContactCta({
  heading = "Berätta om ditt nästa projekt.",
  text = "Stort eller litet, nytt eller gammalt. Hör av dig så pratar vi om vad du vill göra – helt utan kostnad.",
}: ContactCtaProps) {
  return (
    <section aria-labelledby="kontakt-cta-rubrik" className="overflow-hidden py-24 lg:py-36">
      <Container>
        <Measure className="text-navy">Nästa steg</Measure>

        <Reveal>
          <h2 id="kontakt-cta-rubrik" className="mt-12 max-w-[14ch] text-display-xl lg:mt-16">
            {heading}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:items-end lg:gap-8">
          <p className="max-w-[40ch] text-lead text-ink-muted lg:col-span-4">{text}</p>

          <div className="lg:col-span-4 lg:col-start-6">
            <p className="eyebrow text-slate">Ring direkt</p>
            <a
              href={site.phone.href}
              className="mt-2 block font-display text-display-m text-terracotta-ink tabular-nums transition-colors hover:text-navy"
            >
              {site.phone.display}
            </a>
            <a href={`mailto:${site.email}`} className="link-underline mt-2 inline-block text-lg">
              {site.email}
            </a>
          </div>

          <div className="lg:col-span-3 lg:col-start-10 lg:justify-self-end">
            <ButtonLink href={quoteHref} className="w-full sm:w-auto">
              Begär offert
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
