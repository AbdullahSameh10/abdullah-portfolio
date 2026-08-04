import { useTranslation } from "react-i18next";
import clsx from "clsx";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const { t } = useTranslation("common");

  return (
    <div
      className={clsx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {/* Eyebrow */}
      <div
        className={clsx(
          "mb-3 flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        <span aria-hidden="true" className="h-px w-8 bg-sky-500" />

        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500 dark:text-sky-400">
          {t(eyebrow)}
        </span>

        <span aria-hidden="true" className="h-px w-8 bg-sky-500" />
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
        {t(title)}
      </h2>

      {/* Description */}
      {description && (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-8">
          {t(description)}
        </p>
      )}
    </div>
  );
}
