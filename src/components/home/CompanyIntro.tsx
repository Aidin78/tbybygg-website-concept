import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/content/images";
import { site } from "@/content/site";

export function CompanyIntro() {
  return (
    <section aria-labelledby="foretaget-rubrik" className="py-24 lg:py-36">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Eyebrow index="01" className="text-ink-muted lg:col-span-3 lg:pt-3">
          Företaget
        </Eyebrow>

        <div className="lg:col-span-9">
          <Reveal>
            <h2 id="foretaget-rubrik" className="max-w-[22ch] text-display-m">
              Ett lokalt byggföretag som tar ansvar för helheten – och för relationen till dig som kund.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-9 lg:gap-8">
            <Reveal className="space-y-5 text-ink-muted lg:col-span-5" delay={0.1}>
              <p>
                {site.name} grundades {site.founded} av {site.founder}, först som enskild firma. När kunderna blev allt
                fler ombildades verksamheten till ett aktiebolag.
              </p>
              <p>
                Med lång erfarenhet av byggbranschen levererar vi helhetslösningar, oavsett typ av jobb. Effektivitet,
                noggrannhet och kunden i fokus är det som styr arbetet – och målet är att du ska känna dig trygg och
                nöjd när vi är klara.
              </p>
              <Link
                href="/om-oss"
                className="group inline-flex items-center gap-2 pt-2 font-semibold text-navy"
              >
                <span className="link-underline">Mer om oss</span>
                <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>

            <Reveal className="sm:mt-[-4rem] lg:col-span-3 lg:col-start-7" delay={0.2}>
              <Photo
                picture={{ src: images.verktygBalte, alt: "Hantverkare med verktygsbälte i solljus", focus: "60% 50%" }}
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                className="aspect-[3/4]"
              />
            </Reveal>
          </div>

          <div className="mt-16 border-t border-line pt-6 lg:mt-24">
            <p className="eyebrow text-slate">Vi arbetar åt</p>
            <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-3">
              {site.customers.map((customer) => (
                <li key={customer} className="font-display text-display-s">
                  {customer}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
