import type { Metadata, Viewport } from "next";
import { Familjen_Grotesk, Hanken_Grotesk, Newsreader } from "next/font/google";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PAGE_REGION_ID } from "@/components/layout/ids";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import { businessSchema } from "@/lib/structured-data";
import "./globals.css";

const familjen = Familjen_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-familjen",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-hanken",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin", "latin-ext"],
  style: "italic",
  weight: ["400"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – Byggföretag i Stockholm`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: site.name,
    url: "/",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#f6f4ef",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sv" className={`${familjen.variable} ${hanken.variable} ${newsreader.variable}`}>
      <body className="min-h-svh">
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important;clip-path:none!important}`}</style>
        </noscript>
        <a
          href="#innehall"
          className="fixed top-3 left-3 z-[60] -translate-y-24 bg-navy px-4 py-3 text-sm font-semibold text-ivory focus:translate-y-0"
        >
          Hoppa till innehållet
        </a>
        <MotionProvider>
          <SiteHeader />
          <div id={PAGE_REGION_ID}>
            <main id="innehall">{children}</main>
            <SiteFooter />
            <MobileActionBar />
          </div>
        </MotionProvider>
        <JsonLd data={businessSchema()} />
      </body>
    </html>
  );
}
