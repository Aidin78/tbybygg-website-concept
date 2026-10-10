import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Measure } from "@/components/ui/Measure";

export const metadata: Metadata = {
  title: "Sidan finns inte",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Container className="py-24 lg:py-40">
      <Measure className="text-navy">404</Measure>
      <h1 className="mt-12 max-w-[14ch] text-display-xl">Här finns inget att bygga på.</h1>
      <p className="mt-8 max-w-[42ch] text-lead text-ink-muted">
        Sidan du letar efter har flyttats eller finns inte längre. Börja om från startsidan eller hör av dig direkt.
      </p>
      <div className="mt-10 flex flex-col gap-3 xs:flex-row">
        <ButtonLink href="/">Till startsidan</ButtonLink>
        <ButtonLink href="/kontakt" variant="outline">
          Kontakta oss
        </ButtonLink>
      </div>
    </Container>
  );
}
