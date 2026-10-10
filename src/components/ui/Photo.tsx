import Image from "next/image";
import type { Picture } from "@/content/types";
import { cx } from "@/lib/cx";

type PhotoProps = {
  picture: Picture;
  sizes: string;
  className?: string;
  imageClassName?: string;
  preload?: boolean;
};

/** A cropped, responsive image. The wrapper decides the aspect ratio via `className`. */
export function Photo({ picture, sizes, className, imageClassName, preload }: PhotoProps) {
  return (
    <div className={cx("relative overflow-hidden bg-stone", className)}>
      <Image
        src={picture.src}
        alt={picture.alt}
        fill
        sizes={sizes}
        preload={preload}
        placeholder="blur"
        quality={preload ? 80 : 70}
        className={cx("object-cover", imageClassName)}
        style={picture.focus ? { objectPosition: picture.focus } : undefined}
      />
    </div>
  );
}
