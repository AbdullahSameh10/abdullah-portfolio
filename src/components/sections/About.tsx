import { ArrowUpRight, Code2, Layers3, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";

import { Container, Section } from "@Components/layout";
import { SectionHeading } from "@Components/ui";

export default function About() {
  const { t } = useTranslation("about");
  const shouldReduceMotion = useReducedMotion();

  const focusAreas = [
    {
      icon: Code2,
      title: t("focus.frontend.title"),
      description: t("focus.frontend.description"),
    },
    {
      icon: Layers3,
      title: t("focus.architecture.title"),
      description: t("focus.architecture.description"),
    },
    {
      icon: Sparkles,
      title: t("focus.experience.title"),
      description: t("focus.experience.description"),
    },
  ];

  const stats = [
    {
      value: t("stats.experience.value"),
      label: t("stats.experience.label"),
    },
    {
      value: t("stats.projects.value"),
      label: t("stats.projects.label"),
    },
    {
      value: t("stats.technologies.value"),
      label: t("stats.technologies.label"),
    },
    {
      value: t("stats.spokenLanguages.value"),
      label: t("stats.spokenLanguages.label"),
    },
  ];

  return (
    <Section
      id="about"
      aria-labelledby="about-title"
      className="relative overflow-hidden"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-400/10" />

        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.06)_1px,transparent_1px)] [background-size:32px_32px] dark:bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05)_1px,transparent_1px)]" />
      </div>

      <Container className="relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        {/* Main Content */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:gap-10">
          {/* About Content */}
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -30 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
            className="rounded-[2rem] border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/50 sm:p-8 lg:p-10"
          >
            <div className="max-w-2xl">
              <p className="text-lg font-semibold leading-8 text-slate-900 dark:text-white sm:text-xl">
                {t("intro")}
              </p>

              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-8">
                <p>{t("paragraphs.first")}</p>

                <p>{t("paragraphs.second")}</p>
              </div>

              {/* CTA */}
              <a
                href="#projects"
                className="group mt-8 inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-sky-500 hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 active:scale-[0.98] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-400"
              >
                {t("cta")}

                <ArrowUpRight
                  size={16}
                  strokeWidth={2.25}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>

          {/* Focus Areas */}
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 30 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.7,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
            className="grid gap-4"
          >
            {focusAreas.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        duration: 0.5,
                        delay: 0.15 + index * 0.08,
                      }
                }
                className="group rounded-2xl border border-slate-200/80 bg-white/70 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:shadow-lg hover:shadow-sky-500/5 dark:border-slate-800 dark:bg-slate-950/50 dark:hover:border-sky-400/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500 transition-colors duration-300 group-hover:bg-sky-500 group-hover:text-white dark:bg-sky-400/10 dark:text-sky-400 dark:group-hover:bg-sky-400 dark:group-hover:text-slate-950">
                    <Icon size={20} strokeWidth={2} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }
          }
          className="mt-8 grid grid-cols-2 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/60 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/50 sm:grid-cols-4"
        >
          {stats.map(({ value, label }, index) => (
            <div
              key={label}
              className={`relative flex flex-col items-center justify-center px-4 py-7 text-center sm:py-8 ${
                index < stats.length - 1
                  ? "border-b border-slate-200 dark:border-slate-800 sm:border-b-0 sm:border-r"
                  : ""
              } ${index === 1 ? "sm:border-r" : ""} ${
                index === 2 ? "sm:border-r" : ""
              }`}
            >
              <span className="text-2xl font-bold tracking-tight text-sky-500 sm:text-3xl">
                {value}
              </span>

              <span className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
