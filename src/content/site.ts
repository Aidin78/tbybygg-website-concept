export const site = {
  name: "Täby Bygg & Montage",
  legalName: "Täby Bygg & Montage AB",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tbybygg.se").replace(/\/$/, ""),
  description:
    "Byggföretag i Stockholm för ombyggnation, badrums- och köksrenovering, takrenovering, altanbygge och snickeri. För privatpersoner, företag och bostadsrättsföreningar.",
  founded: 2017,
  founder: "Jonathan Landgren",
  orgNumber: "559232-8933",
  city: "Stockholm",
  phone: {
    display: "070-023 12 31",
    href: "tel:+46700231231",
    e164: "+46700231231",
  },
  email: "info@tbybygg.se",
  instagram: {
    handle: "@tabybygg",
    url: "https://www.instagram.com/tabybygg",
  },
  facebook: "https://www.facebook.com/tabybygg",
  credentials: ["F-skatt", "Ansvarsförsäkring"],
  customers: ["Privatpersoner", "Företag", "Bostadsrättsföreningar"],
} as const;

export const mainNav = [
  { href: "/tjanster", label: "Tjänster" },
  { href: "/projekt", label: "Projekt" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const quoteHref = "/kontakt#offert";
