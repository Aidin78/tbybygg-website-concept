import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  aside?: ReactNode;
};

export function PageHeader({ eyebrow, title, lead, aside }: PageHeaderProps) {
  return (
    <header className="pt-10 pb-14 sm:pt-14 lg:pt-20 lg:pb-20">
      <Container className="grid gap-y-6 lg:grid-cols-12 lg:gap-x-8">
        <Eyebrow className="animate-rise text-ink-muted lg:col-span-3 lg:pt-5">{eyebrow}</Eyebrow>
        <div className="lg:col-span-9">
          <h1 className="animate-rise text-display-xl [animation-delay:80ms]">{title}</h1>
          {(lead || aside) && (
            <div className="mt-8 grid gap-8 animate-rise [animation-delay:180ms] lg:mt-12 lg:grid-cols-9 lg:gap-8">
              {lead && <p className="max-w-[46ch] text-lead text-ink-muted lg:col-span-5">{lead}</p>}
              {aside && <div className="lg:col-span-4">{aside}</div>}
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
