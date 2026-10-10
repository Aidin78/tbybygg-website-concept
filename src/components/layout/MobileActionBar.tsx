import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { quoteHref, site } from "@/content/site";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ivory/95 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="grid grid-cols-[auto_1fr] gap-2">
        <a
          href={site.phone.href}
          className="flex min-h-12 items-center gap-2 rounded-[2px] border border-navy/25 px-4 text-[0.95rem] font-semibold"
        >
          <Phone aria-hidden className="size-4 text-terracotta-ink" />
          Ring oss
        </a>
        <Link
          href={quoteHref}
          className="flex min-h-12 items-center justify-center gap-2 rounded-[2px] bg-navy px-4 text-[0.95rem] font-semibold text-ivory"
        >
          Begär offert
          <ArrowUpRight aria-hidden className="size-4" />
        </Link>
      </div>
    </div>
  );
}
