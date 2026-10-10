import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactCta } from "@/components/sections/ContactCta";
import { RotSection } from "@/components/sections/RotSection";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { getService, services } from "@/content/services";
import { quoteHref, site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/structured-data";

// Every slug is prerendered, so resolving params on navigation only fetches static output.
export const instant = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps<"/tjanster/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({ ...service.seo, path: `/tjanster/${service.slug}` });
}

export default async function ServicePage({ params }: PageProps<"/tjanster/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const position = services.findIndex((item) => item.slug === service.slug) + 1;
  const others = services.filter((item) => item.slug !== service.slug);
  const path = `/tjanster/${service.slug}`;

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Start", path: "/" },
          { name: "Tjänster", path: "/tjanster" },
          { name: service.title, path },
        ])}
      />

      <header className="pt-8 sm:pt-12 lg:pt-16">
        <Container>
          <nav aria-label="Brödsmulor" className="animate-rise">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-muted">
              <li>
                <Link href="/tjanster" className="link-underline">
                  Tjänster
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-navy">
                {service.title}
              </li>
            </ol>
          </nav>

          <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:items-end">
            <h1 className="animate-rise text-display-xl [animation-delay:80ms] lg:col-span-8">{service.title}</h1>
            <p className="eyebrow animate-rise text-slate tabular-nums [animation-delay:120ms] lg:col-span-4 lg:pb-4 lg:text-right">
              Tjänst {String(position).padStart(2, "0")} av {String(services.length).padStart(2, "0")} · {site.city}
            </p>
          </div>
        </Container>

        <Container className="mt-10 lg:mt-14">
          <Photo
            picture={service.image}
            sizes="(min-width: 1440px) 1344px, 100vw"
            preload
            className="-mx-4 aspect-[4/3] animate-unveil sm:mx-0 sm:aspect-[21/9]"
          />
        </Container>
      </header>

      <section aria-labelledby="om-tjansten" className="py-20 lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h2 id="om-tjansten" className="max-w-[24ch] text-display-m">
              {service.lead}
            </h2>
            <div className="mt-10 grid gap-6 text-ink-muted sm:grid-cols-2 sm:gap-8">
              {service.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside aria-labelledby="erbjudande" className="lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-32">
              <h2 id="erbjudande" className="eyebrow text-slate">
                Det här hjälper vi till med
              </h2>
              <ul className="mt-4 border-t border-line">
                {service.offer.map((item) => (
                  <li key={item} className="flex gap-4 border-b border-line py-3.5">
                    <span aria-hidden className="mt-[0.75em] h-px w-4 shrink-0 bg-terracotta-ink" />
                    {item}
                  </li>
                ))}
              </ul>
              <ButtonLink href={quoteHref} className="mt-8 w-full">
                Begär offert på {service.label.toLowerCase()}
              </ButtonLink>
              <p className="mt-4 text-sm text-ink-muted">
                Eller ring{" "}
                <a href={site.phone.href} className="font-semibold text-navy tabular-nums underline-offset-4 hover:underline">
                  {site.phone.display}
                </a>
              </p>
            </div>
          </aside>
        </Container>
      </section>

      <section aria-labelledby="infor-samtalet" className="bg-navy py-20 text-ivory lg:py-32">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Eyebrow className="text-ivory/60">Inför första samtalet</Eyebrow>
            <h2 id="infor-samtalet" className="mt-6 text-display-m">
              Tre frågor att fundera på.
            </h2>
            <p className="mt-6 max-w-[38ch] text-ivory/70">
              Du behöver inte ha alla svar. Men ju mer vi vet, desto bättre blir första samtalet – och offerten.
            </p>
          </div>
          <ol className="lg:col-span-7 lg:col-start-6">
            {service.questions.map((question, index) => (
              <Reveal
                as="li"
                key={question}
                delay={index * 0.08}
                className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-line-inverse py-7 last:border-b sm:grid-cols-[4rem_1fr]"
              >
                <span className="font-serif text-[1.75rem] leading-none text-terracotta italic">{index + 1}</span>
                <p className="font-display text-display-s">{question}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-label="Bild och information" className="py-20 lg:py-32">
        <Container className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <Photo picture={service.detail} sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/5]" />
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            {service.note && (
              <p className="border-l-2 border-terracotta-ink pl-5 text-ink-muted">{service.note}</p>
            )}
            <h2 className="mt-10 text-display-s">Fler tjänster</h2>
            <ul className="mt-4 border-t border-line">
              {others.map((item) => (
                <li key={item.slug} className="border-b border-line">
                  <Link
                    href={`/tjanster/${item.slug}`}
                    className="group flex items-center justify-between gap-4 py-4 font-display text-xl tracking-[-0.015em] transition-colors hover:text-terracotta-ink"
                  >
                    {item.title}
                    <ArrowUpRight
                      aria-hidden
                      className="size-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <RotSection />
      <ContactCta heading={service.cta} />
    </>
  );
}
