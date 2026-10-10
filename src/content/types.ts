import type { StaticImageData } from "next/image";

export type Picture = {
  src: StaticImageData;
  alt: string;
  /** CSS object-position used when the image is cropped. */
  focus?: string;
};

export type Service = {
  slug: string;
  title: string;
  /** Short label for filters, breadcrumbs and compact lists. */
  label: string;
  teaser: string;
  lead: string;
  body: readonly string[];
  offer: readonly string[];
  questions: readonly string[];
  note?: string;
  cta: string;
  image: Picture;
  detail: Picture;
  seo: { title: string; description: string };
};

export type Project = {
  id: string;
  title: string;
  service: Service["slug"];
  image: Picture;
  /** true = photographed on the company's own job; false = illustrative example image. */
  verified: boolean;
  caption?: string;
};
