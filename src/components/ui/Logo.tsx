import { cx } from "@/lib/cx";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={cx("shrink-0", className)}>
      <path d="M3 18 16 6l13 12" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="miter" />
      <path d="M22.2 11.7V5.5h3.4v9.3" fill="none" stroke="currentColor" strokeWidth="2.6" />
      <rect x="13.4" y="17.6" width="5.2" height="5.2" fill="var(--color-terracotta)" />
      <path d="M7 27h18" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
    </svg>
  );
}

export function Logo({ className, inverse = false }: { className?: string; inverse?: boolean }) {
  return (
    <span className={cx("flex items-center gap-2.5", inverse ? "text-ivory" : "text-navy", className)}>
      <LogoMark className="size-8" />
      <span className="flex flex-col font-display leading-none">
        <span className="text-[1.0625rem] font-semibold tracking-[-0.02em]">Täby Bygg</span>
        <span className="mt-0.5 text-[0.6875rem] font-medium uppercase tracking-[0.22em] opacity-70">
          & Montage
        </span>
      </span>
    </span>
  );
}
