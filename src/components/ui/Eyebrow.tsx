import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type EyebrowProps = {
  index?: string;
  children: ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
};

export function Eyebrow({ index, children, className, as: Tag = "p" }: EyebrowProps) {
  return (
    <Tag className={cx("eyebrow flex items-center gap-3 self-start", className)}>
      {index && (
        <>
          <span className="tabular-nums">{index}</span>
          <span aria-hidden className="h-px w-8 bg-current opacity-40" />
        </>
      )}
      <span>{children}</span>
    </Tag>
  );
}
