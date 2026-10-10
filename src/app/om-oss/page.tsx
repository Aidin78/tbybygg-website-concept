import { ContactCta } from "@/components/sections/ContactCta";
import { PageHeader } from "@/components/sections/PageHeader";
import { Principles } from "@/components/sections/Principles";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/content/images";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { sentenceList } from "@/lib/text";

export const metadata = pageMetadata({
  title: "Om oss – byggföretag i Stockholm sedan 2017",
  description:
    "Täby Bygg & Montage grundades 2017 av Jonathan Landgren. Ett byggföretag i Stockholm med personlig kontakt, noggrant hantverk och kunden i fokus.",
  path: "/om-oss",
});

const timeline = [
  {
    when: String(site.founded),
    title: "Starten",
    text: `${site.founder} startar ${site.name} som enskild firma.`,
  },
  {
    when: "Därefter",
    title: "Aktiebolag",
    text: `När kunderna blir allt fler ombildas verksamheten till ${site.legalName}.`,
  },
  {
    when: "I dag",
    title: "Bygg och renovering",
    text: `Uppdrag åt privatpersoner, företag och bostadsrättsföreningar i ${site.city}.`,
  },
] as const;

const facts = [
  ["Företagsnamn", site.legalName],
  ["Organisationsnummer", site.orgNumber],
  ["Grundat", `${site.founded} av ${site.founder}`],
  ["Säte", site.city],
  ["Innehar", sentenceList(site.credentials)],
  ["Uppdragsgivare", sentenceList(site.customers)],
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Om oss"
        title={
          <>
            Byggt på förtroende{" "}
            <em className="font-serif font-normal tracking-[-0.02em] text-terracotta-ink">sedan {site.founded}.</em>
          </>
        }
        lead="Täby Bygg & Montage är ett byggföretag i Stockholm som drivs med personlig kontakt och ett tydligt mål: att du ska känna dig trygg och nöjd när arbetet är klart."
      />

      <section aria-labelledby="grundaren" className="pb-24 lg:pb-36">
        <Container className="grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <Photo
              picture={{ src: images.snickeriTakstol, alt: "Högt rum under synliga takstolar i trä med stora fönster" }}
              sizes="(min-width: 1024px) 40vw, 100vw"
              preload
              className="aspect-[4/5]"
            />
          </Reveal>
          <figure className="lg:col-span-6 lg:col-start-7 lg:pb-8">
            <h2 id="grundaren" className="sr-only">
              Grundaren
            </h2>
            <blockquote className="font-serif text-[clamp(1.6rem,1.1rem+1.8vw,2.6rem)] leading-[1.2] tracking-[-0.01em] italic">
              <p>
                ”{site.name} grundades {site.founded} av mig, {site.founder}, som enskild firma. Under senare år
                ombildades företaget till ett aktiebolag, efter att kunderna blev allt fler.”
              </p>
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <span aria-hidden className="h-px w-10 bg-terracotta-ink" />
              <span>
                <span className="block font-semibold">{site.founder}</span>
                <span className="text-sm text-ink-muted">Grundare, {site.legalName}</span>
              </span>
            </figcaption>
          </figure>
        </Container>
      </section>

      <section aria-labelledby="historik" className="bg-navy py-24 text-ivory lg:py-32">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            <Eyebrow className="text-ivory/60 lg:col-span-3 lg:pt-3">Historik</Eyebrow>
            <h2 id="historik" className="text-display-l lg:col-span-9">
              Från enskild firma till aktiebolag.
            </h2>
          </div>
          <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-0 lg:mt-20">
            {timeline.map((step, index) => (
              <Reveal
                as="li"
                key={step.title}
                delay={index * 0.1}
                className="relative border-t border-ivory/30 pt-8 md:pr-10"
              >
                <span aria-hidden className="absolute -top-1.5 left-0 h-3 w-px bg-ivory/60" />
                <p className="font-display text-display-m text-terracotta">{step.when}</p>
                <h3 className="mt-4 text-display-s">{step.title}</h3>
                <p className="mt-3 max-w-[34ch] text-ivory/70">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <Principles heading="Det vi står för." />

      <section aria-labelledby="i-korthet" className="py-24 lg:py-32">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Eyebrow className="text-ink-muted">Fakta</Eyebrow>
            <h2 id="i-korthet" className="mt-6 text-display-m">
              Företaget i korthet.
            </h2>
          </div>
          <dl className="grid border-t border-line sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {facts.map(([term, value]) => (
              <div key={term} className="border-b border-line py-5 sm:pr-6">
                <dt className="eyebrow text-[0.6875rem] text-slate">{term}</dt>
                <dd className="mt-2 font-display text-lg tracking-[-0.01em]">{value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
