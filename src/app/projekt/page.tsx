import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectSheet } from "@/components/projects/ProjectSheet";
import { ContactCta } from "@/components/sections/ContactCta";
import { PageHeader } from "@/components/sections/PageHeader";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Photo } from "@/components/ui/Photo";
import { featuredProject, projects } from "@/content/projects";
import { getService, services } from "@/content/services";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Projekt – renovering och bygg i Stockholm",
  description:
    "Se exempel på arbeten från Täby Bygg & Montage: ombyggnation, badrum, kök, tak, altan och snickeri i Stockholm. Fler bilder finns på Instagram.",
  path: "/projekt",
});

export default function ProjectsPage() {
  const galleryItems = projects.map((project) => ({
    id: project.id,
    title: project.title,
    service: project.service,
    serviceTitle: getService(project.service)?.label ?? "",
    verified: project.verified,
    image: project.image,
  }));

  const filters = services
    .filter((service) => projects.some((project) => project.service === service.slug))
    .map((service) => ({ value: service.slug, label: service.label }));

  return (
    <>
      <PageHeader
        eyebrow="Projekt"
        title="Arbete som syns."
        lead="Ett urval av bilder från bygget och exempel på den typ av arbeten vi utför. Fler bilder från pågående och avslutade jobb delar vi på Instagram."
        aside={
          <ButtonLink
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            icon={false}
          >
            <span className="flex items-center gap-2">
              <InstagramIcon className="size-4" />
              Följ {site.instagram.handle}
            </span>
          </ButtonLink>
        }
      />

      <section aria-labelledby="utvalt-projekt" className="bg-navy py-20 text-ivory lg:py-28">
        <Container className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <Photo
            picture={featuredProject.image}
            sizes="(min-width: 1024px) 42vw, 100vw"
            preload
            className="aspect-[4/5] lg:col-span-5"
          />
          <div className="lg:col-span-6 lg:col-start-7">
            <Eyebrow className="text-ivory/60">Utvalt projekt</Eyebrow>
            <h2 id="utvalt-projekt" className="mt-6 text-display-l">
              {featuredProject.title}
            </h2>
            <p className="mt-6 max-w-[46ch] text-lead text-ivory/70">{featuredProject.caption}</p>
            <ProjectSheet project={featuredProject} inverse className="mt-10" />
          </div>
        </Container>
      </section>

      <section aria-labelledby="galleri-rubrik" className="py-20 lg:py-28">
        <Container>
          <div className="mb-10 grid gap-6 lg:mb-14 lg:grid-cols-12 lg:gap-8">
            <h2 id="galleri-rubrik" className="text-display-m lg:col-span-5">
              Galleri
            </h2>
            <p className="max-w-[60ch] text-[0.95rem] text-ink-muted lg:col-span-6 lg:col-start-7">
              Bilder märkta <strong className="font-semibold text-navy">Eget projekt</strong> kommer från företagets
              eget arbete. Bilder märkta <strong className="font-semibold text-navy">Exempelbild</strong> visar den typ
              av arbete vi utför och ersätts löpande med bilder från våra egna projekt.
            </p>
          </div>
          <ProjectGallery items={galleryItems} filters={filters} />
        </Container>
      </section>

      <ContactCta heading="Nästa projekt kan vara ditt." />
    </>
  );
}
