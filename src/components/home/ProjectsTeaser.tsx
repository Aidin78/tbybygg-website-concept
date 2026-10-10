import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { featuredProject } from "@/content/projects";
import { site } from "@/content/site";
import { ProjectSheet } from "@/components/projects/ProjectSheet";

export function ProjectsTeaser() {
  return (
    <section aria-labelledby="projekt-rubrik" className="py-24 lg:py-36">
      <Container className="grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal as="figure" className="lg:col-span-6">
          <Photo
            picture={featuredProject.image}
            sizes="(min-width: 1440px) 680px, (min-width: 1024px) 48vw, 100vw"
            className="aspect-[4/5]"
          />
          <figcaption className="mt-3 flex items-center gap-3 text-sm text-ink-muted">
            <span className="eyebrow bg-navy px-2 py-1 text-[0.625rem] text-ivory">Eget projekt</span>
            {featuredProject.title}
          </figcaption>
        </Reveal>

        <div className="lg:col-span-5 lg:col-start-8 lg:pb-12">
          <Eyebrow index="03" className="text-ink-muted">
            Projekt
          </Eyebrow>
          <Reveal>
            <h2 id="projekt-rubrik" className="mt-6 text-display-l">
              Från bygget.
            </h2>
            <p className="mt-6 max-w-[44ch] text-ink-muted">{featuredProject.caption}</p>
          </Reveal>

          <ProjectSheet project={featuredProject} className="mt-10" />

          <div className="mt-10 flex flex-col gap-3 xs:flex-row">
            <ButtonLink href="/projekt">Se projekten</ButtonLink>
            <ButtonLink
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              icon={false}
            >
              <span className="flex items-center gap-2">
                <InstagramIcon className="size-4" />
                {site.instagram.handle}
              </span>
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
