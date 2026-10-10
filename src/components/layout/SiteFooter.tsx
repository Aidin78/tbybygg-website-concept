import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Logo } from "@/components/ui/Logo";
import { services } from "@/content/services";
import { mainNav, site } from "@/content/site";
import { sentenceList } from "@/lib/text";

const columnTitle = "eyebrow mb-5 text-ivory/70";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep pb-24 text-ivory md:pb-0">
      <Container className="pt-16 md:pb-10 lg:pt-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Logo inverse />
            <p className="mt-6 max-w-xs text-[0.95rem] text-ivory/70">
              Bygg, renovering och snickeri i Stockholm för privatpersoner, företag och bostadsrättsföreningar.
            </p>
          </div>

          <nav aria-label="Tjänster" className="md:col-span-3">
            <h2 className={columnTitle}>Tjänster</h2>
            <ul className="space-y-2.5 text-[0.95rem]">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/tjanster/${service.slug}`} className="link-underline text-ivory/85 hover:text-ivory">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Webbplats" className="md:col-span-2">
            <h2 className={columnTitle}>Webbplats</h2>
            <ul className="space-y-2.5 text-[0.95rem]">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline text-ivory/85 hover:text-ivory">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/integritetspolicy" className="link-underline text-ivory/85 hover:text-ivory">
                  Integritetspolicy
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className={columnTitle}>Kontakt</h2>
            <ul className="space-y-2.5 text-[0.95rem]">
              <li>
                <a href={site.phone.href} className="link-underline tabular-nums">
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="link-underline">
                  {site.email}
                </a>
              </li>
              <li className="text-ivory/70">{site.city}</li>
              <li>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ivory/85 hover:text-ivory"
                >
                  <InstagramIcon className="size-4" />
                  <span className="link-underline">{site.instagram.handle}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 border-t border-line-inverse text-[0.8125rem] text-ivory/60 md:grid-cols-4">
          {[
            ["Företag", site.legalName],
            ["Org.nr", site.orgNumber],
            ["Grundat", String(site.founded)],
            ["Innehar", sentenceList(site.credentials)],
          ].map(([term, value]) => (
            <div
              key={term}
              className="border-b border-line-inverse py-4 pr-4 md:border-b-0 md:border-l md:pl-4 md:first:border-l-0 md:first:pl-0"
            >
              <dt className="eyebrow mb-1 text-[0.6875rem] text-ivory/65">{term}</dt>
              <dd className="text-ivory/75">{value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </footer>
  );
}
