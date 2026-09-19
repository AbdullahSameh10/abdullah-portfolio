import { Code2, Cpu, Terminal } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";

import { Container, Section } from "@Components/layout";
import { ProjectCard, SectionHeading } from "@Components/ui";

import projects from "@Data/projects";
import type { ProjectCategory } from "@Types/Project.types";

const categoryIcons: Record<ProjectCategory, typeof Code2> = {
  frontend: Code2,
  python: Terminal,
  cpp: Cpu,
};

const categories: ProjectCategory[] = ["frontend", "python", "cpp"];

export default function Projects() {
  const { t } = useTranslation("projects");
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="projects"
      aria-labelledby="projects-title"
      className="relative overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND DECORATION
          ===================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Top-left glow */}
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-400/10" />

        {/* Bottom-right glow */}
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.045)_1px,transparent_1px)] [background-size:32px_32px] dark:bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.04)_1px,transparent_1px)]" />
      </div>

      <Container className="relative z-10">
        {/* =====================================================
            SECTION HEADING
            ===================================================== */}
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        {/* =====================================================
            PROJECT CATEGORIES
            ===================================================== */}
        <div className="mt-14 space-y-16">
          {categories.map((category, categoryIndex) => {
            const Icon = categoryIcons[category];

            const categoryProjects = projects.filter(
              (project) => project.category === category,
            );

            return (
              <motion.section
                key={category}
                aria-labelledby={`projects-${category}-title`}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 24 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.08,
                }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        duration: 0.65,
                        delay: categoryIndex * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }
                }
              >
                {/* =================================================
                    CATEGORY HEADER
                    ================================================= */}
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-sky-500/15 bg-sky-500/10 text-sky-500 dark:border-sky-400/15 dark:bg-sky-400/10 dark:text-sky-400">
                    <Icon size={22} strokeWidth={2} aria-hidden="true" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3
                        id={`projects-${category}-title`}
                        className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-2xl"
                      >
                        {t(`categories.${category}.title`)}
                      </h3>

                      {/* Project count */}
                      <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-400">
                        {categoryProjects.length} {t("projectCount")}
                      </span>
                    </div>

                    <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {t(`categories.${category}.description`)}
                    </p>
                  </div>
                </div>

                {/* =================================================
                    PROJECT GRID
                    ================================================= */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {categoryProjects.map((project, projectIndex) => (
                    <ProjectCard
                      key={project.key}
                      project={project}
                      index={projectIndex}
                    />
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
