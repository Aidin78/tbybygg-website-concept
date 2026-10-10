import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { cx } from "@/lib/cx";

const variants = {
  primary: "bg-navy text-ivory hover:bg-navy-deep",
  accent: "bg-terracotta-ink text-ivory hover:bg-[#7f452c]",
  outline: "border border-navy/30 text-navy hover:border-navy hover:bg-navy hover:text-ivory",
  inverse: "bg-ivory text-navy hover:bg-paper",
  "outline-inverse": "border border-ivory/35 text-ivory hover:border-ivory hover:bg-ivory hover:text-navy",
} as const;

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: keyof typeof variants;
  icon?: boolean;
};

export const buttonBase =
  "group inline-flex min-h-12 items-center justify-center gap-3 rounded-[2px] px-6 text-[0.95rem] font-semibold tracking-[-0.005em] transition-colors duration-300";

export function ButtonLink({ variant = "primary", icon = true, className, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={cx(buttonBase, variants[variant], className)} {...props}>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          aria-hidden
          className="size-4 shrink-0 transition-transform duration-300 ease-(--ease-out-quart) group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  );
}
