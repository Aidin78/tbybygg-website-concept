import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { quoteHref } from "@/content/site";
import type { Service } from "@/content/types";
import { cx } from "@/lib/cx";

export type FeatureLayout = "wide" | "left" | "right" | "pair";

type ServiceFeatureProps = {
  service: Service;
  position: number;
  total: number;
  layout: FeatureLayout;
};

function Summary({ service, position, total }: Omit<ServiceFeatureProps, "layout">) {
  const href = `/tjanster/${service.slug}`;
  return (
    <>
      <Eyebrow index={`${String(position).padStart(2, "0")} / ${String(total).padStart(2, "0")}`} className="text-ink-muted">
        {service.label}
      </Eyebrow>
      <h2 className="mt-5 text-display-l">
        <Link href={href} className="transition-colors hover:text-terracotta-ink">
          {service.title}
        </Link>
      </h2>
      <p className="mt-6 max-w-[44ch] text-lead text-ink-muted">{service.lead}</p>
      <ul className="mt-8 border-t border-line text-[0.95rem]">
        {service.offer.map((item) => (
          <li key={item} className="border-b border-line py-3">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-col gap-4 xs:flex-row xs:items-center xs:gap-8">
        <ButtonLink href={href} variant="outline">
          Läs mer om {service.label.toLowerCase()}
        </ButtonLink>
        <Link href={quoteHref} className="group inline-flex items-center gap-2 font-semibold">
          <span className="link-underline">Begär offert</span>
          <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </>
  );
}

export function ServiceFeature({ service, position, total, layout }: ServiceFeatureProps) {
  const summary = <Summary service={service} position={position} total={total} />;

  if (layout === "wide") {
    return (
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-12">
          <Photo picture={service.image} sizes="(min-width: 1440px) 1344px, 100vw" className="aspect-[4/3] sm:aspect-[21/9]" />
        </Reveal>
        <div className="lg:col-span-7">{summary}</div>
      </Container>
    );
  }

  if (layout === "pair") {
    return (
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="grid grid-cols-12 gap-4 lg:col-span-12 lg:gap-8">
          <Reveal className="col-span-8 lg:col-span-7">
            <Photo picture={service.image} sizes="(min-width: 1024px) 56vw, 66vw" className="aspect-[4/3]" />
          </Reveal>
          <Reveal className="col-span-4 mt-16 lg:col-span-4 lg:col-start-9 lg:mt-32" delay={0.15}>
            <Photo picture={service.detail} sizes="(min-width: 1024px) 30vw, 33vw" className="aspect-[3/4]" />
          </Reveal>
        </div>
        <div className="lg:col-span-6 lg:col-start-2">{summary}</div>
      </Container>
    );
  }

  const imageFirst = layout === "left";
  return (
    <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
      <Reveal
        className={cx("lg:col-span-6", imageFirst ? "lg:col-start-1" : "lg:col-start-7 lg:row-start-1")}
      >
        <Photo picture={service.image} sizes="(min-width: 1024px) 48vw, 100vw" className="aspect-[4/5]" />
      </Reveal>
      <div className={cx("lg:col-span-5", imageFirst ? "lg:col-start-8" : "lg:col-start-1 lg:row-start-1")}>
        {summary}
      </div>
    </Container>
  );
}
