import { CircleDot } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";

import { Container, Section, SectionDivider } from "@Components/layout";
import { SectionHeading } from "@Components/ui";

import experience from "@Data/experience";

export default function Experience() {
  const { t } = useTranslation("experience");
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="experience"
      aria-labelledby="experience-title"
      className="relative"
    >
      {/* =====================================================
          BACKGROUND DECORATION
          ===================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Top-right glow */}
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-400/10" />

        {/* Bottom-left glow */}
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.045)_1px,transparent_1px)] [background-size:32px_32px] dark:bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.04)_1px,transparent_1px)]" />
      </div>

      <Container className="relative z-10">
        {/* =====================================================
            SECTION HEADING
            ===================================================== */}
        <SectionHeading
          eyebrow={t("section.eyebrow")}
          title={t("section.title")}
          description={t("section.description")}
        />

        {/* =====================================================
            EXPERIENCE TIMELINE
            ===================================================== */}
        <div className="mx-auto mt-14 max-w-5xl">
          <div className="relative">
            {/* Timeline line */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 start-4 top-0 w-px bg-gradient-to-b from-sky-500/60 via-slate-300 to-transparent dark:from-sky-400/60 dark:via-slate-700"
            />

            <div className="space-y-8 sm:space-y-10">
              {experience.map((item, index) => {
                const title = t(`${item.key}.title`);
                const description = t(`${item.key}.description`);
                const type = t(`types.${item.type}`);

                const yearRange = item.current
                  ? `${item.startYear} — ${t("status.present")}`
                  : `${item.startYear} — ${item.endYear}`;

                return (
                  <motion.article
                    key={item.key}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 24 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : {
                            duration: 0.55,
                            delay: index * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                          }
                    }
                    className="relative ps-12"
                  >
                    {/* =================================================
                        TIMELINE POINT
                        ================================================= */}
                    <div
                      aria-hidden="true"
                      className={`absolute start-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-sm dark:bg-slate-950 ${
                        item.current
                          ? "border-sky-500/40 text-sky-500 shadow-sky-500/10 dark:border-sky-400/40 dark:text-sky-400"
                          : "border-slate-200 text-slate-400 dark:border-slate-800 dark:text-slate-500"
                      }`}
                    >
                      <CircleDot size={17} strokeWidth={1.8} />
                    </div>

                    {/* =================================================
                        EXPERIENCE CARD
                        ================================================= */}
                    <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-500/20 hover:shadow-lg hover:shadow-sky-500/5 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-sky-400/20 dark:hover:shadow-sky-400/5 sm:p-6">
                      {/* Header */}
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-semibold uppercase tracking-wider text-sky-500 dark:text-sky-400">
                              {yearRange}
                            </span>
                          </div>

                          <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
                            {title}
                          </h3>
                        </div>

                        <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-500 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-400">
                          {type}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400">
                        {description}
                      </p>

                      {/* Technologies */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-400"
                          >
                            {t(`technologies.${technology}`)}
                          </span>
                        ))}
                      </div>

                      {/* Hover accent */}
                      <div
                        aria-hidden="true"
                        className="absolute bottom-0 end-6 start-6 h-px origin-left scale-x-0 bg-gradient-to-r from-sky-500/60 via-sky-400/20 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                      />
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      {/* =====================================================
          SECTION DIVIDER
          ===================================================== */}
      <SectionDivider className="!absolute bottom-2 left-0 right-0 lg:-bottom-5" />
    </Section>
  );
}
