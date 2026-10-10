import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/content/images";
import { quoteHref, site } from "@/content/site";
import { cx } from "@/lib/cx";
import { sentenceList } from "@/lib/text";

const facts = [
  { term: "Grundat", value: `${site.founded} av ${site.founder}` },
  { term: "Innehar", value: sentenceList(site.credentials) },
  { term: "ROT-avdrag", value: "För privatpersoner som uppfyller villkoren" },
  { term: "Uppdragsgivare", value: "Privatpersoner, företag och BRF" },
] as const;

const factPadding = ["pl-0", "pl-4 lg:pl-5", "pl-0 lg:pl-5", "pl-4 lg:pl-5"];

export function Hero() {
  return (
    <section aria-labelledby="hero-rubrik" className="overflow-hidden">
      <Container className="pt-8 sm:pt-12 lg:pt-16">
        <Eyebrow className="animate-rise text-ink-muted">Byggföretag i {site.city} · sedan {site.founded}</Eyebrow>

        <h1 id="hero-rubrik" className="mt-6 text-display-xl lg:mt-8">
          <span className="block animate-rise [animation-delay:80ms]">Noggrant byggt.</span>
          <span className="block animate-rise [animation-delay:180ms]">
            <em className="pr-[0.04em] font-serif font-normal tracking-[-0.02em] text-terracotta-ink">Nära</em> hela
            vägen.
          </span>
        </h1>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col justify-between gap-10 lg:col-span-4">
            <div className="animate-rise [animation-delay:300ms]">
              <p className="max-w-[38ch] text-lead text-ink-muted">
                Vi bygger om och renoverar hem i {site.city} – badrum, kök, tak, altaner och allt däremellan. Du har
                samma kontakt från första samtalet till färdigt resultat.
              </p>
              <div className="mt-8 flex flex-col gap-3 xs:flex-row lg:flex-col xl:flex-row">
                <ButtonLink href={quoteHref}>Begär offert</ButtonLink>
                <ButtonLink href="/projekt" variant="outline">
                  Se våra projekt
                </ButtonLink>
              </div>
            </div>
            <p className="hidden max-w-[30ch] border-t border-line pt-4 text-sm text-ink-muted lg:block">
              Ring{" "}
              <a href={site.phone.href} className="font-semibold text-navy tabular-nums underline-offset-4 hover:underline">
                {site.phone.display}
              </a>{" "}
              eller mejla{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-navy underline-offset-4 hover:underline">
                {site.email}
              </a>
            </p>
          </div>

          <div className="-mx-4 sm:mx-0 lg:col-span-8">
            <Photo
              picture={{ src: images.kokEk, alt: "Ljust kök med vit köksö, barstolar i ek och pendellampor" }}
              sizes="(min-width: 1440px) 900px, (min-width: 1024px) 64vw, 100vw"
              preload
              className="aspect-[4/5] animate-unveil [animation-delay:200ms] sm:aspect-[16/10]"
            />
          </div>
        </div>
      </Container>

      <Container>
        <dl className="mt-12 grid grid-cols-2 gap-px border-y border-line bg-line lg:mt-16 lg:grid-cols-4">
          {facts.map((fact, index) => (
            <div key={fact.term} className={cx("bg-ivory py-5 pr-3 lg:py-6", factPadding[index])}>
              <dt className="eyebrow text-[0.6875rem] text-slate">{fact.term}</dt>
              <dd className="mt-2 font-display text-[1.0625rem] leading-snug tracking-[-0.01em] sm:text-lg">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
