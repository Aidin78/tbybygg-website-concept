"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryItem } from "./ProjectGallery";

type LightboxProps = {
  items: readonly GalleryItem[];
  index: number | null;
  onChange: (index: number | null) => void;
};

const controlClass =
  "flex size-12 items-center justify-center rounded-full border border-ivory/25 text-ivory transition-colors hover:border-ivory hover:bg-ivory hover:text-navy";

export function Lightbox({ items, index, onChange }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const item = index === null ? null : items[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (item && !dialog.open) dialog.showModal();
    if (!item && dialog.open) dialog.close();
  }, [item]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") onChange((index + 1) % items.length);
      if (event.key === "ArrowLeft") onChange((index - 1 + items.length) % items.length);
    };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [index, items.length, onChange]);

  return (
    <dialog
      ref={dialogRef}
      aria-label={item ? `Bild: ${item.title}` : "Bildvisning"}
      onClose={() => onChange(null)}
      onClick={(event) => {
        if (event.target === event.currentTarget) onChange(null);
      }}
      className="m-0 h-dvh max-h-none w-screen max-w-none bg-navy-deep p-0 text-ivory backdrop:bg-transparent open:flex open:flex-col"
    >
      {item && index !== null && (
        <>
          <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-8">
            <p className="eyebrow text-ivory/60 tabular-nums">
              {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </p>
            <button type="button" autoFocus onClick={() => onChange(null)} className={controlClass}>
              <X aria-hidden className="size-5" />
              <span className="sr-only">Stäng bildvisning</span>
            </button>
          </div>

          <div className="relative min-h-0 flex-1 px-4 sm:px-24">
            <Image
              key={item.id}
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="100vw"
              quality={80}
              placeholder="blur"
              className="animate-rise object-contain"
            />
          </div>

          <div className="flex flex-col gap-4 px-4 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-8">
            <div>
              <p className="font-display text-xl tracking-[-0.015em]">{item.title}</p>
              <p className="mt-1 text-sm text-ivory/60">
                {item.serviceTitle} · {item.verified ? "Eget projekt" : "Exempelbild"}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => onChange((index - 1 + items.length) % items.length)}
                className={controlClass}
              >
                <ChevronLeft aria-hidden className="size-5" />
                <span className="sr-only">Föregående bild</span>
              </button>
              <button type="button" onClick={() => onChange((index + 1) % items.length)} className={controlClass}>
                <ChevronRight aria-hidden className="size-5" />
                <span className="sr-only">Nästa bild</span>
              </button>
            </div>
          </div>
        </>
      )}
    </dialog>
  );
}
