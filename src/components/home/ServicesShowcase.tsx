import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/content/services";
import { ServiceIndex } from "./ServiceIndex";

export function ServicesShowcase() {
  const items = services.map(({ slug, title, teaser, image }) => ({ slug, title, teaser, image }));

  return (
    <section aria-labelledby="tjanster-rubrik" className="bg-navy py-24 text-ivory lg:py-36">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <Eyebrow index="02" className="text-ivory/60 lg:col-span-3 lg:pt-3">
            Tjänster
          </Eyebrow>
          <Reveal className="lg:col-span-5">
            <h2 id="tjanster-rubrik" className="text-display-l">
              Från golv till tak.
            </h2>
          </Reveal>
          <Reveal className="space-y-6 text-ivory/70 lg:col-span-4 lg:pt-3" delay={0.1}>
            <p>
              Vi tar oss an alla typer av bygg- och snickerijobb. Osäker på om vi har rätt lösning för dig? Hör av dig
              – det kostar ingenting att fråga.
            </p>
            <Link href="/tjanster" className="group inline-flex items-center gap-2 font-semibold text-ivory">
              <span className="link-underline">Alla tjänster</span>
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 lg:mt-20">
          <ServiceIndex items={items} />
        </div>
      </Container>
    </section>
  );
}
