import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/content/approach";

export function Process() {
  return (
    <section aria-labelledby="process-rubrik" className="py-24 lg:py-36">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <Eyebrow index="05" className="text-ink-muted lg:col-span-3 lg:pt-3">
            Så går det till
          </Eyebrow>
          <Reveal className="lg:col-span-6">
            <h2 id="process-rubrik" className="text-display-l">
              Fem steg från idé till färdigt.
            </h2>
          </Reveal>
          <p className="max-w-[40ch] text-ink-muted lg:col-span-3 lg:pt-3">
            Så ser ett typiskt uppdrag ut. Varje projekt anpassas efter dina förutsättningar.
          </p>
        </div>

        <ol className="mt-16 grid lg:mt-24 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.title}
              delay={index * 0.08}
              className="relative border-l border-navy/25 pb-10 pl-6 last:pb-0 lg:border-t lg:border-l-0 lg:pt-10 lg:pr-8 lg:pb-0 lg:pl-0"
            >
              <span
                aria-hidden
                className="absolute top-0 -left-[5px] size-[9px] rounded-full border border-navy bg-ivory lg:top-[-5px] lg:left-0"
              />
              <span className="eyebrow text-terracotta-ink tabular-nums">Steg {index + 1}</span>
              <h3 className="mt-3 text-display-s">{step.title}</h3>
              <p className="mt-3 max-w-[34ch] text-[0.95rem] text-ink-muted">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
