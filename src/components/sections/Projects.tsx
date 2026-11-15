import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  Cpu,
  Layers3,
  Terminal,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import { Container, Section, SectionDivider } from "@Components/layout";
import { ProjectCard, SectionHeading } from "@Components/ui";

import projects from "@Data/projects";
import type { ProjectCategory } from "@Types/Project.types";

type ProjectFilter = ProjectCategory | "all";

const categoryIcons: Record<ProjectFilter, typeof Code2> = {
  all: Layers3,
  frontend: Code2,
  python: Terminal,
  cpp: Cpu,
};

const categories: ProjectFilter[] = ["all", "frontend", "python", "cpp"];

export default function Projects() {
  const { t, i18n } = useTranslation("projects");
  const isRtl = i18n.dir() === "rtl";

  const [activeCategory, setActiveCategory] = useState<ProjectFilter>("all");

  const sliderRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [progress, setProgress] = useState(0); // 0..1 scroll position
  const [visibleRatio, setVisibleRatio] = useState(1); // 0..1 how much fits

  const visibleProjects = useMemo(
    () =>
      activeCategory === "all"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  const updateSlider = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;

    // scrollLeft is negative in RTL, so always work with the absolute value
    const scrolled = Math.abs(el.scrollLeft);
    const maxScroll = el.scrollWidth - el.clientWidth;

    setCanPrev(scrolled > 4);
    setCanNext(scrolled < maxScroll - 4);
    setProgress(maxScroll > 0 ? Math.min(scrolled / maxScroll, 1) : 0);
    setVisibleRatio(el.scrollWidth > 0 ? el.clientWidth / el.scrollWidth : 1);
  }, []);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    updateSlider();
    el.addEventListener("scroll", updateSlider, { passive: true });

    const observer = new ResizeObserver(updateSlider);
    observer.observe(el);

    return () => {
      el.removeEventListener("scroll", updateSlider);
      observer.disconnect();
    };
  }, [updateSlider, visibleProjects]);

  const slide = (direction: "prev" | "next") => {
    const el = sliderRef.current;
    if (!el) return;

    const step = el.clientWidth * 0.85;
    const forward = direction === "next" ? 1 : -1;

    el.scrollBy({
      left: forward * (isRtl ? -1 : 1) * step,
      behavior: "smooth",
    });
  };

  const changeCategory = (category: ProjectFilter) => {
    setActiveCategory(category);
    sliderRef.current?.scrollTo({ left: 0, behavior: "auto" });
  };

  // The progress bar is a "thumb" whose width is the visible share of the
  // slider and whose position follows the scroll.
  const thumbWidth = Math.max(visibleRatio, 0.12);
  const thumbOffset = progress * (1 - thumbWidth);

  return (
    <Section
      id="projects"
      aria-labelledby="projects-title"
      className="relative"
    >
      {/* BACKGROUND DECORATION */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-400/10" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.045)_1px,transparent_1px)] [background-size:32px_32px] dark:bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.04)_1px,transparent_1px)]" />
      </div>

      <Container className="relative z-10">
        {/* SECTION HEADING */}
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        {/* CATEGORY FILTERS */}
        <div className="mt-8 flex justify-center sm:mt-10">
          <div
            role="group"
            aria-label={t("filters.label")}
            className="inline-flex max-w-full gap-1 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white/70 p-1.5 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/60"
          >
            {categories.map((category) => {
              const Icon = categoryIcons[category];
              const count =
                category === "all"
                  ? projects.length
                  : projects.filter((project) => project.category === category)
                      .length;
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => changeCategory(category)}
                  className={`inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-xl px-3.5 text-xs font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 sm:px-4 sm:text-sm ${
                    isActive
                      ? "bg-sky-500 text-white shadow-md shadow-sky-500/20"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"
                  }`}
                >
                  <Icon size={15} strokeWidth={2} aria-hidden="true" />
                  <span>{t(`filters.${category}`)}</span>
                  <span
                    className={`text-[10px] tabular-nums ${
                      isActive
                        ? "text-white/75"
                        : "text-slate-400 dark:text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* PROJECT SLIDER */}
        <div className="pj-root" style={{ marginTop: 24 }}>
          <div
            ref={sliderRef}
            className="pj-slider"
            role="region"
            tabIndex={0}
            aria-label={t("title")}
          >
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.key} project={project} index={index} />
            ))}
          </div>

          {/* CONTROLS: scroll progress + arrows */}
          <div className="pj-controls">
            <div className="pj-track" aria-hidden="true">
              <div
                className="pj-track-fill"
                style={{
                  width: `${thumbWidth * 100}%`,
                  left: isRtl ? "auto" : `${thumbOffset * 100}%`,
                  right: isRtl ? `${thumbOffset * 100}%` : "auto",
                  transform: "none",
                }}
              />
            </div>

            <div className="pj-arrows">
              <button
                type="button"
                className="pj-arrow"
                onClick={() => slide("prev")}
                disabled={!canPrev}
                aria-label={t("actions.previous")}
              >
                {isRtl ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
              </button>
              <button
                type="button"
                className="pj-arrow"
                onClick={() => slide("next")}
                disabled={!canNext}
                aria-label={t("actions.next")}
              >
                {isRtl ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
              </button>
            </div>
          </div>
        </div>
      </Container>

      <SectionDivider className="!absolute bottom-2 left-0 right-0 lg:-bottom-5" />
    </Section>
  );
}
