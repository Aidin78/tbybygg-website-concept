import { images } from "./images";
import type { Project } from "./types";

/**
 * Only `verified: true` entries are photos from the company's own jobs.
 * Example images are clearly labelled on the site and should be replaced
 * with project photos supplied by Täby Bygg & Montage before launch.
 */
export const projects = [
  {
    id: "tillbyggnad-uterum",
    title: "Tillbyggnad med inglasat uterum",
    service: "ombyggnation",
    verified: true,
    caption:
      "Tillbyggnad med stora glaspartier, träpanel och ny trappa – fotograferad i slutskedet av bygget.",
    image: {
      src: images.projektTillbyggnadUterum,
      alt: "Nybyggt inglasat uterum med träpanel och trätrappa intill ett grått trähus, med verktyg på marken",
    },
  },
  {
    id: "badrum-ribbor",
    title: "Badrum med träribbor",
    service: "badrumsrenovering",
    verified: false,
    image: {
      src: images.badrumRibbor,
      alt: "Badrum med grå klinker, badkar och vägg klädd med träribbor",
    },
  },
  {
    id: "kok-ek",
    title: "Ljust kök med köksö",
    service: "koksrenovering",
    verified: false,
    image: {
      src: images.kokEk,
      alt: "Ljust kök med vit köksö, barstolar i ek och pendellampor",
    },
  },
  {
    id: "golv-fiskben",
    title: "Golv i fiskbensmönster",
    service: "snickeri",
    verified: false,
    image: {
      src: images.snickeriGolv,
      alt: "Ljust rum med fiskbensmönstrat trägolv och en sideboard i trä",
    },
  },
  {
    id: "altan-skog",
    title: "Altan i skogsmiljö",
    service: "altanbygge",
    verified: false,
    image: {
      src: images.altanStuga,
      alt: "Trähus med altan och räcke mitt i en granskog",
    },
  },
  {
    id: "badrum-sten",
    title: "Badrum i grå sten",
    service: "badrumsrenovering",
    verified: false,
    image: {
      src: images.badrumSten,
      alt: "Badrum med grå stenväggar, svart handfat på träkommod och fristående badkar",
    },
  },
  {
    id: "ombyggnad-oppen-planlosning",
    title: "Öppen planlösning med kök",
    service: "ombyggnation",
    verified: false,
    image: {
      src: images.ombyggnationRum,
      alt: "Nyrenoverat ljust rum med trägolv och kök längs ena väggen",
    },
  },
  {
    id: "tak-villa",
    title: "Villatak bland tallar",
    service: "takrenovering",
    verified: false,
    image: {
      src: images.takHus,
      alt: "Villa med mörkt tak och takkupor bland höga tallar i morgonljus",
    },
  },
  {
    id: "takstolar",
    title: "Synliga takstolar i trä",
    service: "snickeri",
    verified: false,
    image: {
      src: images.snickeriTakstol,
      alt: "Högt rum under synliga takstolar i trä med stora fönster",
    },
  },
  {
    id: "kok-ljusgratt",
    title: "Ljusgrått kök mot trädgården",
    service: "koksrenovering",
    verified: false,
    image: {
      src: images.kokLjust,
      alt: "Kök i ljusgrå kulör med stort fönster ut mot grönska",
    },
  },
  {
    id: "badrum-ljust",
    title: "Ljust badrum med badkar",
    service: "badrumsrenovering",
    verified: false,
    image: {
      src: images.badrumLjust,
      alt: "Vitt badrum med fristående badkar, handfat och gröna växter",
    },
  },
  {
    id: "kok-arbetsyta",
    title: "Kök med stenbänkskiva",
    service: "koksrenovering",
    verified: false,
    image: {
      src: images.kokDetalj,
      alt: "Kök med vita luckor, inbyggda vitvaror och bänkskiva i ljus sten",
    },
  },
] as const satisfies readonly Project[];

export const featuredProject = projects[0];
