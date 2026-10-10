import type { Metadata } from "next";
import { CompanyIntro } from "@/components/home/CompanyIntro";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { ProjectsTeaser } from "@/components/home/ProjectsTeaser";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { ContactCta } from "@/components/sections/ContactCta";
import { Principles } from "@/components/sections/Principles";
import { RotSection } from "@/components/sections/RotSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <ServicesShowcase />
      <ProjectsTeaser />
      <Principles index="04" heading="Tryggt från första samtalet." />
      <Process />
      <RotSection index="06" />
      <ContactCta />
    </>
  );
}
