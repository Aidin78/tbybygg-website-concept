/**
 * Ordinary ROT rules as published by Skatteverket for 2026.
 * The temporary 50 % rate applied only to payments made 12 May–31 Dec 2025.
 * Review these values at the start of every calendar year.
 */
export const rot = {
  year: 2026,
  rate: 0.3,
  maxPerPerson: 50_000,
  combinedRotRutMax: 75_000,
  sourceUrl:
    "https://www.skatteverket.se/foretag/skatterochavdrag/rotochrut/safungerarrotavdraget.4.2ef18e6a125660db8b080002709.html",
  privateUrl:
    "https://www.skatteverket.se/privat/fastigheterochbostad/rotarbeteochrutarbete.4.2e56d4ba1202f95012080002966.html",
} as const;

export const rotPoints = [
  "Avdraget gäller arbetskostnaden – inte material eller resor.",
  `Högst ${Math.round(rot.rate * 100)} procent av arbetskostnaden, och högst ${rot.maxPerPerson.toLocaleString("sv-SE")} kronor per person och år.`,
  "Avdraget görs direkt på fakturan. Vi ansöker om utbetalningen hos Skatteverket.",
  "Du som köper tjänsten måste uppfylla Skatteverkets villkor – bland annat att du äger bostaden där arbetet utförs.",
] as const;
