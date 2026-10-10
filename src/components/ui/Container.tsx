import type { ComponentPropsWithoutRef } from "react";
import { cx } from "@/lib/cx";

export function Container({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cx("mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12", className)} {...props} />;
}
