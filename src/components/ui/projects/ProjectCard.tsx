import { ArrowUpRight, CircleDot } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import { SiGithub } from "@icons-pack/react-simple-icons";

import type { Project } from "@Types/Project.types";

import ProjectPreview from "./ProjectPreview";
import "./projects.css";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const MAX_VISIBLE_TAGS = 4;

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { t } = useTranslation("projects");
  const shouldReduceMotion = useReducedMotion();

  const title = t(`projects.${project.key}.title`);
  const description = t(`projects.${project.key}.description`);
  const isFeatured = project.level === "featured";
  const isInProgress = project.status === "in-progress";

  const visibleTags = project.technologies.slice(0, MAX_VISIBLE_TAGS);
  const hiddenTags = project.technologies.slice(MAX_VISIBLE_TAGS);

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: Math.min(index, 5) * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`pj-card ${isFeatured ? "pj-card--featured" : ""}`}
    >
      <ProjectPreview project={project} title={title} />

      <div className="pj-body">
        <div className="pj-badges">
          <span
            className={`pj-badge ${
              isInProgress ? "pj-badge--progress" : "pj-badge--done"
            }`}
          >
            <CircleDot size={10} strokeWidth={2.25} aria-hidden="true" />
            {t(`status.${project.status}`)}
          </span>

          {isFeatured && (
            <span className="pj-badge pj-badge--featured">
              {t("featured")}
            </span>
          )}
        </div>

        <h3 className="pj-title">{title}</h3>

        <p className="pj-desc">{description}</p>

        <ul className="pj-tags">
          {visibleTags.map((technology) => (
            <li key={technology} className="pj-tag">
              {t(`technologies.${technology}`)}
            </li>
          ))}

          {hiddenTags.length > 0 && (
            <li
              className="pj-tag"
              title={hiddenTags
                .map((technology) => t(`technologies.${technology}`))
                .join(", ")}
            >
              +{hiddenTags.length}
            </li>
          )}
        </ul>

        {(project.liveUrl || project.githubUrl) && (
          <div className="pj-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t("actions.liveDemo")}: ${title}`}
                className="pj-btn pj-btn--primary"
              >
                {t("actions.liveDemo")}
                <ArrowUpRight size={14} strokeWidth={2.25} aria-hidden="true" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t("actions.viewGithub")}: ${title}`}
                className="pj-btn pj-btn--secondary"
              >
                <SiGithub size={14} aria-hidden="true" />
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
