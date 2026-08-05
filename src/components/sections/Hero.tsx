import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Container, Section, SectionDivider } from "@Components/layout";
import styles from "@/globals.module.css";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { t } = useTranslation("hero");

  return (
    <Section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen items-center"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-400/10" />

        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.06)_1px,transparent_1px)] [background-size:32px_32px] dark:bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05)_1px,transparent_1px)]" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col-reverse items-center gap-10 py-14 text-center sm:gap-12 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:py-0 lg:text-left">
          {/* Hero Content */}
          <div className="max-w-3xl flex flex-col">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex max-w-[229px] items-center gap-3 rounded-full border border-sky-500/20 bg-sky-500/5 px-4 py-2 dark:border-sky-400/20 dark:bg-sky-400/5 rtl:max-w-[162px]">
              <span aria-hidden="true" className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                {t("eyebrow")}
              </span>
            </div>

            {/* Heading */}
            <h1
              id="hero-title"
              className="text-left text-4xl font-bold leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl rtl:text-right"
            >
              {t("title.greeting")}{" "}
              <span className="text-sky-500">{t("title.name")}</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg rtl:text-right">
              {t("description")}
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                {t("actions.projects")}

                <ArrowUpRight
                  size={17}
                  strokeWidth={2.25}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white/70 px-7 py-3 text-sm font-semibold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:border-sky-500 hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 active:scale-[0.98] dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-400"
              >
                {t("actions.contact")}
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <motion.div
            aria-hidden="true"
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.92 }
            }
            animate={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2,
                  }
            }
            className="relative flex h-72 w-full max-w-xs items-center justify-center sm:h-80 sm:max-w-sm lg:ml-auto lg:h-96 lg:max-w-md lg:justify-end"
          >
            <div className="relative flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72 lg:mr-10 lg:h-80 lg:w-80">
              {/* =====================================================
                  AMBIENT GLOW
                  ===================================================== */}

              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.08, 1],
                        opacity: [0.35, 0.55, 0.35],
                      }
                }
                transition={
                  shouldReduceMotion
                    ? undefined
                    : {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
                className="absolute h-44 w-44 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-400/10 sm:h-52 sm:w-52 lg:h-60 lg:w-60"
              />

              {/* =====================================================
                  OUTER ORBIT
                  ===================================================== */}

              <div
                className={`${styles["hero-orbit-clockwise"]} hero-orbit-clockwise absolute inset-0 rounded-full border border-sky-500/10 dark:border-sky-400/10`}
              >
                {/* Orbit highlight */}
                <div className="absolute inset-0 rounded-full border border-transparent border-t-sky-500/30 dark:border-t-sky-400/30" />

                {/* Outer dot */}
                <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400 shadow-[0_0_14px_rgba(56,189,248,0.9)] dark:bg-sky-300" />
              </div>

              {/* =====================================================
                  INNER ORBIT
                  ===================================================== */}

              <div
                className={`${styles["hero-orbit-counter-clockwise"]} absolute left-[10%] top-[10%] h-[80%] w-[80%] rounded-full border border-sky-500/15 dark:border-sky-400/15`}
              >
                {/* Orbit highlight */}
                <div className="absolute inset-0 rounded-full border border-transparent border-b-sky-500/30 dark:border-b-sky-400/30" />

                {/* Inner dot */}
                <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)] dark:bg-blue-400" />
              </div>

              {/* =====================================================
                  CENTRAL AS CARD
                  ===================================================== */}

              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: [0, -5, 0, 5, 0],
                      }
                }
                transition={
                  shouldReduceMotion
                    ? undefined
                    : {
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
                className="relative z-10 flex h-32 w-32 items-center justify-center rounded-[1.75rem] border border-sky-500/20 bg-white/80 shadow-[0_20px_70px_rgba(14,165,233,0.12)] backdrop-blur-xl dark:border-sky-400/20 dark:bg-slate-900/80 sm:h-36 sm:w-36 sm:rounded-[2rem] lg:h-40 lg:w-40 lg:rounded-[2.25rem]"
              >
                {/* Card glow */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-[inherit] bg-sky-500/[0.03] dark:bg-sky-400/[0.03]"
                />

                {/* AS */}
                <span className="font-sansation relative text-5xl font-bold tracking-tight text-sky-500 sm:text-6xl lg:text-6xl">
                  AS
                </span>

                {/* Small top-right accent */}
                <motion.span
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: [0.35, 1, 0.35],
                          scale: [0.85, 1, 0.85],
                        }
                  }
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                  }
                  className="absolute -right-1.5 -top-1.5 h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
                />

                {/* Small bottom-left accent */}
                <motion.span
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: [1, 0.35, 1],
                          scale: [1, 0.85, 1],
                        }
                  }
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1.5,
                        }
                  }
                  className="absolute -bottom-1.5 -left-1.5 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="group absolute -bottom-32 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-400 transition-colors duration-300 hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-4 lg:flex"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
            {t("scroll")}
          </span>

          <ArrowDown
            size={18}
            strokeWidth={2}
            aria-hidden="true"
            className="animate-bounce"
          />
        </a>
      </Container>
      <SectionDivider className="!absolute bottom-2 lg:-bottom-[14px] left-0 right-0" />
    </Section>
  );
}
