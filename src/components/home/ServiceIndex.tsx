"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Picture } from "@/content/types";
import { cx } from "@/lib/cx";

type ServiceIndexItem = {
  slug: string;
  title: string;
  teaser: string;
  image: Picture;
};

export function ServiceIndex({ items }: { items: readonly ServiceIndexItem[] }) {
  const [active, setActive] = useState(0);
  const total = String(items.length).padStart(2, "0");

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
      <ol className="border-t border-line-inverse lg:col-span-7">
        {items.map((item, index) => {
          const isActive = index === active;
          return (
            <li key={item.slug} className="border-b border-line-inverse">
              <Link
                href={`/tjanster/${item.slug}`}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                className="group grid grid-cols-[2.25rem_1fr_auto] items-start gap-x-3 py-6 sm:grid-cols-[3.5rem_1fr_auto] lg:py-8"
              >
                <span className="eyebrow pt-2 text-ivory/70 tabular-nums lg:pt-4">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <span
                    className={cx(
                      "block font-display text-display-m transition-colors duration-300",
                      isActive ? "lg:text-terracotta" : "lg:text-ivory",
                    )}
                  >
                    {item.title}
                  </span>
                  <span className="mt-2 block max-w-[46ch] text-[0.95rem] text-ivory/65">{item.teaser}</span>
                </span>
                <span className="flex items-start gap-4">
                  <Image
                    src={item.image.src}
                    alt=""
                    width={80}
                    height={100}
                    sizes="80px"
                    quality={70}
                    className="aspect-[4/5] w-16 object-cover sm:w-20 lg:hidden"
                    style={item.image.focus ? { objectPosition: item.image.focus } : undefined}
                  />
                  <ArrowUpRight
                    aria-hidden
                    className="mt-2 hidden size-6 text-ivory/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ivory lg:block"
                  />
                </span>
              </Link>
            </li>
          );
        })}
      </ol>

      <div aria-hidden className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-28">
          <div className="relative aspect-[4/5] overflow-hidden bg-navy-deep">
            {items.map((item, index) => (
              <Image
                key={item.slug}
                src={item.image.src}
                alt=""
                fill
                sizes="(min-width: 1440px) 560px, 38vw"
                quality={70}
                placeholder="blur"
                className={cx(
                  "object-cover transition-[opacity,transform] duration-700 ease-(--ease-out-quart)",
                  index === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0",
                )}
                style={item.image.focus ? { objectPosition: item.image.focus } : undefined}
              />
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between text-ivory/60">
            <span className="eyebrow">{items[active]?.title}</span>
            <span className="eyebrow tabular-nums">
              {String(active + 1).padStart(2, "0")} / {total}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
