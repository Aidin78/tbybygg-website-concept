import { getService } from "@/content/services";
import type { Project } from "@/content/types";
import { cx } from "@/lib/cx";

type ProjectSheetProps = {
  project: Project;
  className?: string;
  inverse?: boolean;
};

/** A compact "drawing title block" describing a project. */
export function ProjectSheet({ project, className, inverse = false }: ProjectSheetProps) {
  const line = inverse ? "border-line-inverse" : "border-line";
  const service = getService(project.service);
  const rows = [
    ["Projekt", project.title],
    ["Tjänst", service?.title ?? "–"],
    ["Bild", project.verified ? "Från företagets eget arbete" : "Exempelbild"],
  ] as const;

  return (
    <dl className={cx("border-t text-[0.95rem]", line, className)}>
      {rows.map(([term, value]) => (
        <div key={term} className={cx("grid grid-cols-[7rem_1fr] gap-4 border-b py-3", line)}>
          <dt className={cx("eyebrow pt-1 text-[0.6875rem]", inverse ? "text-ivory/70" : "text-slate")}>{term}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
