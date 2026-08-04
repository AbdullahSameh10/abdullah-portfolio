import type { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  as?: "section" | "div" | "article";
}

export default function Section({
  children,
  id,
  className,
  as: Component = "section",
}: SectionProps) {
  return (
    <Component
      id={id}
      className={clsx("w-full py-16 sm:py-20 lg:py-24", className)}
    >
      {children}
    </Component>
  );
}
