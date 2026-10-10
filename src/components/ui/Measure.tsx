import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

/** Architectural dimension line: a hairline with end ticks and an optional centred label. */
export function Measure({ children, className }: { children?: ReactNode; className?: string }) {
  return (
    <div aria-hidden={children ? undefined : true} className={cx("flex items-center gap-3 text-current", className)}>
      <span className="h-3 w-px bg-current opacity-50" />
      <span className="h-px flex-1 bg-current opacity-30" />
      {children && <span className="eyebrow shrink-0 opacity-80">{children}</span>}
      {children && <span className="h-px flex-1 bg-current opacity-30" />}
      <span className="h-3 w-px bg-current opacity-50" />
    </div>
  );
}
