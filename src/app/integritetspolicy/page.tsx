import type { ReactNode } from "react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Integritetspolicy",
  description: "Så behandlar Täby Bygg & Montage AB dina personuppgifter när du kontaktar oss eller skickar en offertförfrågan.",
  path: "/integritetspolicy",
});

/** Marks text the business owner must confirm before launch. */
function Confirm({ children }: { children: ReactNode }) {
  return (
    <mark className="bg-terracotta/15 px-1 text-navy">
      <span className="eyebrow mr-1.5 text-[0.625rem] text-navy">Att bekräfta</span>
      {children}
    </mark>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-line py-10 lg:grid-cols-12 lg:gap-8">
      <h2 className="text-display-s lg:col-span-4">{title}</h2>
      <div className="space-y-4 text-ink-muted lg:col-span-8 [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-navy [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Integritetspolicy"
        title="Så hanterar vi dina uppgifter."
        lead="Vi samlar bara in de uppgifter vi behöver för att kunna svara dig och utföra uppdrag. Här beskriver vi vad som gäller."
      />

      <Container className="pb-24 lg:pb-36">
        <aside className="mb-12 border-l-2 border-terracotta-ink bg-paper p-6 text-[0.95rem] lg:ml-[calc(25%+0.5rem)]">
          <p className="font-semibold">Utkast inför lansering</p>
          <p className="mt-2 text-ink-muted">
            Texten beskriver hur den nya webbplatsen fungerar tekniskt. Den är inte juridiskt granskad. Avsnitt markerade
            &quot;Att bekräfta&quot; behöver kompletteras av {site.legalName} innan publicering.
          </p>
        </aside>

        <Section title="Personuppgiftsansvarig">
          <p>
            <strong>{site.legalName}</strong>, organisationsnummer {site.orgNumber}, är personuppgiftsansvarig för
            behandlingen av dina personuppgifter.
          </p>
          <p>
            Kontakt: <a href={`mailto:${site.email}`} className="text-navy underline underline-offset-4">{site.email}</a>,{" "}
            <a href={site.phone.href} className="text-navy underline underline-offset-4">{site.phone.display}</a>.{" "}
            <Confirm>Postadress för integritetsfrågor.</Confirm>
          </p>
        </Section>

        <Section title="Uppgifter vi behandlar">
          <p>När du skickar en offertförfrågan via formuläret behandlar vi:</p>
          <ul>
            <li>namn och e-postadress</li>
            <li>telefonnummer, om du väljer att lämna det</li>
            <li>vilken typ av tjänst förfrågan gäller</li>
            <li>projektbeskrivningen och det du själv skriver i den</li>
          </ul>
          <p>
            Kontaktar du oss via telefon, e-post eller Instagram behandlar vi de uppgifter du lämnar där. Blir du kund
            behandlar vi även de uppgifter som behövs för offert, avtal, fakturering och – om du vill använda
            ROT-avdrag – de uppgifter Skatteverket kräver, till exempel personnummer och fastighetsbeteckning.
          </p>
        </Section>

        <Section title="Varför vi behandlar uppgifterna">
          <ul>
            <li>
              <strong>Besvara förfrågningar och ta fram offerter.</strong> Rättslig grund: åtgärder innan ett eventuellt
              avtal ingås, eller vårt berättigade intresse av att besvara den som kontaktar oss.
            </li>
            <li>
              <strong>Utföra och administrera uppdrag.</strong> Rättslig grund: fullgörande av avtal.
            </li>
            <li>
              <strong>Bokföring och ROT-avdrag.</strong> Rättslig grund: rättslig förpliktelse enligt bland annat
              bokföringslagen och reglerna för rot- och rutavdrag.
            </li>
          </ul>
          <p>Vi använder inte uppgifterna för marknadsföring och säljer dem aldrig vidare.</p>
        </Section>

        <Section title="Hur länge uppgifterna sparas">
          <p>
            Förfrågningar som inte leder till ett uppdrag sparas i högst{" "}
            <Confirm>[antal månader]</Confirm> och raderas därefter.
          </p>
          <p>
            Uppgifter som ingår i räkenskapsinformation sparas så länge bokföringslagen kräver, i dag sju år efter
            utgången av det kalenderår då räkenskapsåret avslutades.
          </p>
        </Section>

        <Section title="Vem som kan ta del av uppgifterna">
          <p>
            Uppgifterna hanteras av oss. Vi anlitar leverantörer som behandlar uppgifter för vår räkning
            (personuppgiftsbiträden):
          </p>
          <ul>
            <li>
              Drift av webbplatsen: <Confirm>Vercel Inc., USA – eller annan vald leverantör.</Confirm>
            </li>
            <li>
              Leverans av formulärmeddelanden via e-post: <Confirm>Resend, USA – eller annan vald leverantör.</Confirm>
            </li>
            <li>
              E-post och administration: <Confirm>företagets e-postleverantör och eventuellt bokföringssystem.</Confirm>
            </li>
          </ul>
          <p>
            Vid ROT-avdrag lämnas uppgifter till Skatteverket. Om en leverantör behandlar uppgifter utanför EU/EES sker
            det med stöd av <Confirm>EU-kommissionens beslut om EU–US Data Privacy Framework eller standardavtalsklausuler.</Confirm>
          </p>
        </Section>

        <Section title="Kakor och statistik">
          <p>
            Webbplatsen använder i dag inga kakor för statistik eller marknadsföring och inga analysverktyg. Om det
            ändras uppdaterar vi den här policyn och ber om ditt samtycke där det krävs.
          </p>
          <p>
            Länkar till Instagram leder till en tjänst med egna integritetsvillkor. Vi bäddar inte in
            innehåll därifrån på webbplatsen.
          </p>
        </Section>

        <Section title="Dina rättigheter">
          <p>
            Du har rätt att begära tillgång till, rättelse eller radering av dina personuppgifter, att begära begränsad
            behandling, att invända mot behandling som grundas på berättigat intresse och att få ut uppgifter du lämnat
            i ett maskinläsbart format (dataportabilitet).
          </p>
          <p>
            Kontakta oss på{" "}
            <a href={`mailto:${site.email}`} className="text-navy underline underline-offset-4">
              {site.email}
            </a>{" "}
            om du vill använda dina rättigheter. Är du missnöjd med hur vi behandlar dina uppgifter kan du lämna
            klagomål till Integritetsskyddsmyndigheten (IMY),{" "}
            <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer" className="text-navy underline underline-offset-4">
              imy.se
            </a>
            .
          </p>
        </Section>

        <Section title="Ändringar">
          <p>
            Vi kan komma att uppdatera policyn. Den senaste versionen finns alltid på den här sidan. Senast uppdaterad:{" "}
            <Confirm>[datum vid publicering]</Confirm>.
          </p>
        </Section>
      </Container>
    </>
  );
}
