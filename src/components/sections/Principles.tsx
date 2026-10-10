import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { principles } from "@/content/approach";

type PrinciplesProps = {
  index?: string;
  heading: string;
  className?: string;
};

export function Principles({ index, heading, className = "bg-paper" }: PrinciplesProps) {
  return (
    <section aria-labelledby="principer-rubrik" className={`py-24 lg:py-36 ${className}`}>
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Eyebrow index={index} className="text-ink-muted">
              Därför väljer kunder oss
            </Eyebrow>
            <Reveal>
              <h2 id="principer-rubrik" className="mt-6 max-w-[16ch] text-display-l">
                {heading}
              </h2>
            </Reveal>
          </div>
        </div>

        <ol className="lg:col-span-6 lg:col-start-7">
          {principles.map((principle, i) => (
            <Reveal
              as="li"
              key={principle.title}
              className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-line py-8 last:border-b sm:grid-cols-[4rem_1fr]"
            >
              <span className="font-serif text-[1.75rem] leading-none text-terracotta-ink italic">{i + 1}</span>
              <div>
                <h3 className="text-display-s">{principle.title}</h3>
                <p className="mt-3 max-w-[48ch] text-ink-muted">{principle.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
