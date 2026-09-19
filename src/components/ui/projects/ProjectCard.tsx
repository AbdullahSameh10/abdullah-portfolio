import { ArrowUpRight, ExternalLink, CircleDot } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";

import type { Project } from "@Types/Project.types";
import { SiGithub } from "@icons-pack/react-simple-icons";

import ProjectPreview from "./ProjectPreview";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { t } = useTranslation("projects");
  const shouldReduceMotion = useReducedMotion();

  const title = t(`projects.${project.key}.title`);
  const description = t(`projects.${project.key}.description`);

  const isFeatured = project.level === "featured";
  const isInProgress = project.status === "in-progress";

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 0.6,
              delay: index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }
      }
      className={`group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/70 shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-sky-500/30 hover:shadow-xl hover:shadow-sky-500/10 dark:border-slate-800 dark:bg-slate-950/50 dark:hover:border-sky-400/30 dark:hover:shadow-sky-400/5 ${
        isFeatured ? "lg:p-1" : ""
      }`}
    >
      {/* =====================================================
          FEATURED GLOW
          ===================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-500/10 opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-sky-400/10"
      />

      <div className="relative rounded-[2rem] bg-white/60 dark:bg-slate-950/60">
        {/* =================================================
            PROJECT PREVIEW
            ================================================= */}
        <ProjectPreview
          project={project}
          title={title}
        />

        {/* =================================================
            CONTENT
            ================================================= */}
        <div className="p-5 sm:p-6">
          {/* Status + Featured */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {/* Status */}
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${
                  isInProgress
                    ? "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-400"
                    : "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-400"
                }`}
              >
                <CircleDot size={11} strokeWidth={2.25} aria-hidden="true" />

                {t(`status.${project.status}`)}
              </span>

              {/* Featured */}
              {isFeatured && (
                <span className="inline-flex items-center rounded-full border border-sky-500/20 bg-sky-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-sky-600 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-400">
                  {t("featured")}
                </span>
              )}
            </div>
          </div>

          {/* Title */}
          <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-[15px] sm:leading-7">
            {description}
          </p>

          {/* =================================================
              TECHNOLOGIES
              ================================================= */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 transition-colors duration-300 group-hover:border-sky-500/15 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400"
              >
                {t(`technologies.${technology}`)}
              </span>
            ))}
          </div>

          {/* =================================================
              ACTIONS
              ================================================= */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {/* Live Demo */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/action inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                {t("actions.liveDemo")}

                <ArrowUpRight
                  size={15}
                  strokeWidth={2.25}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover/action:-translate-y-0.5 group-hover/action:translate-x-0.5"
                />
              </a>
            )}

            {/* GitHub */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-2.5 text-xs font-semibold text-slate-700 transition-all duration-300 hover:border-sky-500 hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 active:scale-[0.98] dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-400"
              >
                <SiGithub size={15} aria-hidden="true" />

                {t("actions.viewGithub")}
              </a>
            )}

            {/* External link */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${title}`}
                className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-500 transition-all duration-300 hover:border-sky-500 hover:bg-sky-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-400 dark:hover:border-sky-400 dark:hover:bg-sky-400 dark:hover:text-slate-950"
              >
                <ExternalLink size={16} strokeWidth={2} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
