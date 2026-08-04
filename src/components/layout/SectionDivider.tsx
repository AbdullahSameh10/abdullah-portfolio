import { motion, useReducedMotion } from "framer-motion";

interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({
  className = "",
}: SectionDividerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={`relative flex w-full items-center justify-center ${className}`}
    >
      {/* Left gradient line */}
      <div className="h-px flex-1 bg-gradient-to-r rtl:bg-gradient-to-l from-transparent via-sky-500/10 to-sky-500/25 dark:via-sky-400/10 dark:to-sky-400/25" />

      {/* Center mark */}
      <div className="relative mx-5 flex h-8 w-8 items-center justify-center sm:mx-7">
        {/* Outer glow */}
        <motion.span
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.15, 0.3, 0.15],
                  scale: [0.9, 1.05, 0.9],
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : {
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
          className="absolute h-8 w-8 rounded-full bg-sky-500 blur-md dark:bg-sky-400"
        />

        {/* Center diamond */}
        <span className="relative h-4 w-4 rotate-45 rounded-[2px] border border-sky-500/60 bg-sky-500/20 shadow-sm shadow-sky-500/30 dark:border-sky-400/60 dark:bg-sky-400/20" />

    </div>

      {/* Right gradient line */}
      <div className="h-px flex-1 bg-gradient-to-l rtl:bg-gradient-to-r from-transparent via-sky-500/10 to-sky-500/25 dark:via-sky-400/10 dark:to-sky-400/25" />
    </div>
  );
}
