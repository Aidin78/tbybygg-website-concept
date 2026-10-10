import { services } from "@/content/services";
import { site } from "@/content/site";
import type { Service } from "@/content/types";

const businessId = `${site.url}/#foretag`;

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": businessId,
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    description: site.description,
    telephone: site.phone.e164,
    email: site.email,
    foundingDate: String(site.founded),
    founder: { "@type": "Person", name: site.founder },
    taxID: site.orgNumber,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressCountry: "SE",
    },
    areaServed: { "@type": "City", name: site.city },
    sameAs: [site.instagram.url, site.facebook],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tjänster",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: `${site.url}/tjanster/${service.slug}`,
        },
      })),
    },
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seo.description,
    url: `${site.url}/tjanster/${service.slug}`,
    serviceType: service.title,
    areaServed: { "@type": "City", name: site.city },
    provider: { "@id": businessId },
  };
}

export function breadcrumbSchema(items: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
