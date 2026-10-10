"use client";

import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import type { Picture } from "@/content/types";
import { cx } from "@/lib/cx";
import { Lightbox } from "./Lightbox";

export type GalleryItem = {
  id: string;
  title: string;
  service: string;
  serviceTitle: string;
  verified: boolean;
  image: Picture;
};

type Filter = { value: string; label: string };

const tiles = [
  { span: "sm:col-span-7", aspect: "sm:aspect-[4/3]" },
  { span: "sm:col-span-5", aspect: "sm:aspect-[20/21]" },
  { span: "sm:col-span-4", aspect: "sm:aspect-[4/5]" },
  { span: "sm:col-span-4", aspect: "sm:aspect-[4/5]" },
  { span: "sm:col-span-4", aspect: "sm:aspect-[4/5]" },
  { span: "sm:col-span-5", aspect: "sm:aspect-[20/21]" },
  { span: "sm:col-span-7", aspect: "sm:aspect-[4/3]" },
];

function tileClasses(index: number) {
  const tile = tiles[index % tiles.length];
  const wide = index % 3 === 0;
  return {
    span: cx(wide ? "col-span-2" : "col-span-1", tile.span),
    aspect: cx(wide ? "aspect-[4/3]" : "aspect-[3/4]", tile.aspect),
  };
}

export function ProjectGallery({ items, filters }: { items: readonly GalleryItem[]; filters: readonly Filter[] }) {
  const [filter, setFilter] = useState("alla");
  const [open, setOpen] = useState<number | null>(null);

  useLayoutEffect(() => () => setOpen(null), []);

  const visible = filter === "alla" ? items : items.filter((item) => item.service === filter);

  return (
    <>
      <div role="group" aria-label="Filtrera projekt" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        {[{ value: "alla", label: "Alla" }, ...filters].map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={filter === option.value}
            onClick={() => setFilter(option.value)}
            className={cx(
              "min-h-11 shrink-0 rounded-[2px] border px-4 text-[0.95rem] font-medium transition-colors",
              filter === option.value ? "border-navy bg-navy text-ivory" : "border-navy/20 hover:border-navy",
            )}
          >
            {option.label}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Visar {visible.length} bilder
      </p>

      <ul className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-12 sm:gap-x-6 sm:gap-y-12 lg:mt-12">
        {visible.map((item, index) => {
          const tile = tileClasses(index);
          return (
          <li key={item.id} className={tile.span}>
            <button
              type="button"
              onClick={() => setOpen(index)}
              className="group block w-full text-left"
            >
              <span className={cx("relative block overflow-hidden bg-stone", tile.aspect)}>
                <Image
                  src={item.image.src}
                  alt=""
                  fill
                  sizes="(min-width: 1440px) 800px, (min-width: 640px) 58vw, 100vw"
                  quality={70}
                  placeholder="blur"
                  className="object-cover transition-transform duration-700 ease-(--ease-out-quart) group-hover:scale-[1.03]"
                />
                <span
                  className={cx(
                    "eyebrow absolute top-3 left-3 px-2 py-1 text-[0.625rem]",
                    item.verified ? "bg-navy text-ivory" : "bg-ivory/90 text-ink-muted",
                  )}
                >
                  {item.verified ? "Eget projekt" : "Exempelbild"}
                </span>
              </span>
              <span className="mt-3 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <span className="font-display text-[1.0625rem] leading-snug tracking-[-0.01em] sm:text-lg">
                  <span className="sr-only">Visa större bild: </span>
                  {item.title}
                </span>
                <span className="text-sm text-ink-muted">{item.serviceTitle}</span>
              </span>
            </button>
          </li>
          );
        })}
      </ul>

      <Lightbox items={visible} index={open} onChange={setOpen} />
    </>
  );
}
