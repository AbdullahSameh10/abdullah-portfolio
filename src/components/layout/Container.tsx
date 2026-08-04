import type { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "main" | "section" | "article";
}

export default function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={clsx(
        "mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-14",
        className,
      )}
    >
      {children}
    </Component>
  );
}
