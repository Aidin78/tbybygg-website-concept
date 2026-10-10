import Link from "next/link";
import { ContactCta } from "@/components/sections/ContactCta";
import { PageHeader } from "@/components/sections/PageHeader";
import { RotSection } from "@/components/sections/RotSection";
import { type FeatureLayout, ServiceFeature } from "@/components/services/ServiceFeature";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/metadata";
import { cx } from "@/lib/cx";

export const metadata = pageMetadata({
  title: "Tjänster – bygg och renovering i Stockholm",
  description:
    "Ombyggnation, badrumsrenovering, köksrenovering, takrenovering, altanbygge och snickeri i Stockholm. Se vad vi kan hjälpa dig med och begär en offert.",
  path: "/tjanster",
});

const layouts: FeatureLayout[] = ["wide", "right", "left", "pair", "right", "left"];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tjänster"
        title="Sex sätt att göra hemmet bättre."
        lead="Vi tar oss an alla typer av bygg- och snickerijobb – åt privatpersoner, företag och bostadsrättsföreningar. Här är det vi oftast hjälper till med."
        aside={
          <nav aria-label="Tjänster på sidan">
            <ol className="border-t border-line text-[0.95rem]">
              {services.map((service, index) => (
                <li key={service.slug} className="border-b border-line">
                  <Link href={`#${service.slug}`} className="flex gap-4 py-2.5 hover:text-terracotta-ink">
                    <span className="eyebrow pt-1 text-slate tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        }
      />

      {services.map((service, index) => (
        <section
          key={service.slug}
          id={service.slug}
          aria-label={service.title}
          className={cx("py-20 lg:py-28", layouts[index] === "pair" && "bg-stone-soft")}
        >
          <ServiceFeature service={service} position={index + 1} total={services.length} layout={layouts[index]} />
        </section>
      ))}

      <RotSection />
      <ContactCta heading="Osäker på vad du behöver?" text="Beskriv projektet med några rader eller ring oss. Vi berättar hur vi kan hjälpa till – kostnadsfritt." />
    </>
  );
}
