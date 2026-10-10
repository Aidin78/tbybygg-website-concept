import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { rot, rotPoints } from "@/content/rot";
import { RotCalculator } from "./RotCalculator";

export function RotSection({ index }: { index?: string }) {
  return (
    <section aria-labelledby="rot-rubrik" className="bg-stone-soft py-24 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <Eyebrow index={index} className="text-ink-muted">
            ROT-avdrag
          </Eyebrow>
          <Reveal>
            <h2 id="rot-rubrik" className="mt-6 max-w-[18ch] text-display-l">
              Betala mindre för arbetet.
            </h2>
            <p className="mt-6 max-w-[48ch] text-lead text-ink-muted">
              Renoverar du bostaden du äger kan du som privatperson ha rätt till ROT-avdrag. Under {rot.year} är
              avdraget {Math.round(rot.rate * 100)} procent av arbetskostnaden.
            </p>
          </Reveal>

          <ul className="mt-10 border-t border-line">
            {rotPoints.map((point) => (
              <li key={point} className="flex gap-4 border-b border-line py-4 text-[0.95rem]">
                <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-terracotta-ink" />
                {point}
              </li>
            ))}
          </ul>

          <a
            href={rot.privateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 text-[0.95rem] font-semibold"
          >
            <span className="link-underline">Läs mer hos Skatteverket</span>
            <ArrowUpRight aria-hidden className="size-4" />
            <span className="sr-only">(öppnas i ny flik)</span>
          </a>
        </div>

        <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.1}>
          <RotCalculator />
        </Reveal>
      </Container>
    </section>
  );
}
