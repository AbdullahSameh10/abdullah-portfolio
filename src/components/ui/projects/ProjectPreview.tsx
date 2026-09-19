import { ExternalLink, Monitor } from "lucide-react";
import { useState } from "react";

import type { Project } from "@Types/Project.types";

interface ProjectPreviewProps {
  project: Project;
  title: string;
}

const PREVIEW_SCALE = 0.4;

export default function ProjectPreview({
  project,
  title,
}: ProjectPreviewProps) {
  const [loaded, setLoaded] = useState(false);

  const isWeb = project.previewType === "web";
  const isDesktop = project.previewType === "desktop";
  const isTerminal = project.previewType === "terminal";

  const displayUrl = project.liveUrl
    ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : title;

  const previewLabel = isTerminal
    ? `${displayUrl.replaceAll(" ", "_")}.exe`
    : displayUrl;

  return (
    <div className="group relative m-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      {/* =====================================================
          WINDOW HEADER
          ===================================================== */}
      <div
        className={`flex h-10 items-center gap-3 rounded-tl-2xl rounded-tr-2xl border-b px-3 backdrop-blur-xl sm:px-4 ${
          isTerminal
            ? "border-white/10 bg-[#171717]"
            : "border-slate-200/80 bg-white/90 dark:border-slate-800 dark:bg-slate-950/90"
        }`}
      >
        {/* Window controls */}
        <div aria-hidden="true" className="flex shrink-0 items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>

        {/* Address / Window title */}
        <div className="min-w-0 flex-1">
          <div
            className={`mx-auto flex h-7 max-w-md items-center justify-center gap-2 rounded-md border px-3 ${
              isTerminal
                ? "border-white/10 bg-[#0c0c0c]"
                : "border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900"
            }`}
          >
            {isDesktop && (
              <Monitor
                size={12}
                strokeWidth={2}
                aria-hidden="true"
                className={
                  isTerminal
                    ? "shrink-0 text-slate-500"
                    : "shrink-0 text-slate-400"
                }
              />
            )}

            <span
              className={`truncate text-center text-[10px] font-medium sm:text-xs ${
                isTerminal
                  ? "text-slate-400"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              {previewLabel}
            </span>
          </div>
        </div>

        {/* External link */}
        {project.liveUrl && (
          <ExternalLink
            size={14}
            strokeWidth={1.8}
            aria-hidden="true"
            className="shrink-0 text-slate-400 transition-colors duration-300 group-hover:text-sky-500 dark:text-slate-500 dark:group-hover:text-sky-400"
          />
        )}
      </div>

      {/* =====================================================
          PREVIEW AREA
          ===================================================== */}
      <div className="relative aspect-[16/10] w-[102%] overflow-hidden bg-white dark:bg-slate-950">
        {/* ===================================================
            TERMINAL / C++ PROJECT PREVIEW
            =================================================== */}
        {isTerminal && project.image && (
          <div className="absolute inset-0 overflow-hidden bg-[#0c0c0c]">
            <img
              src={project.image}
              alt={`${title} terminal output`}
              loading="lazy"
              className="h-full w-full object-contain object-center"
            />
          </div>
        )}

        {/* ===================================================
            LIVE WEB PREVIEW
            =================================================== */}
        {isWeb && project.liveUrl && (
          <>
            {!loaded && (
              <div
                aria-hidden="true"
                className="absolute inset-0 z-10 animate-pulse bg-slate-200 dark:bg-slate-800"
              >
                <div className="absolute inset-x-0 top-0 h-8 bg-slate-300/60 dark:bg-slate-700/60" />

                <div className="mx-auto mt-20 h-8 w-2/3 rounded-lg bg-slate-300/60 dark:bg-slate-700/60" />

                <div className="mx-auto mt-4 h-4 w-1/2 rounded bg-slate-300/60 dark:bg-slate-700/60" />

                <div className="mx-auto mt-8 h-32 w-4/5 rounded-xl bg-slate-300/60 dark:bg-slate-700/60" />
              </div>
            )}

            <iframe
              src={project.liveUrl}
              title={`${title} live preview`}
              loading="lazy"
              onLoad={() => setLoaded(true)}
              tabIndex={-1}
              aria-hidden="true"
              className={`pointer-events-none absolute left-0 top-0 origin-top-left border-0 transition-opacity duration-500 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              style={{
                width: `${100 / PREVIEW_SCALE}%`,
                height: `${100 / PREVIEW_SCALE}%`,
                transform: `scale(${PREVIEW_SCALE})`,
                colorScheme: "dark",
              }}
            />

            {/* Open project */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title} in a new tab`}
              className="absolute right-3 top-3 z-30 inline-flex min-h-9 items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/80 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-slate-950 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 group-hover:opacity-100 sm:right-4 sm:top-4"
            >
              Open
              <ExternalLink size={13} strokeWidth={2} aria-hidden="true" />
            </a>
          </>
        )}

        {/* ===================================================
            STATIC PROJECT IMAGE
            =================================================== */}
        {!isTerminal && !project.liveUrl && project.image && (
          <img
            src={project.image}
            alt={`${title} project preview`}
            loading="lazy"
            className="h-full w-full"
          />
        )}

        {/* ===================================================
            PLACEHOLDER
            =================================================== */}
        {!project.liveUrl && !project.image && (
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-400/10" />

            <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />

            {/* Placeholder */}
            <div className="relative flex flex-col items-center justify-center px-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-500/20 bg-sky-500/10 text-sky-500 dark:border-sky-400/20 dark:bg-sky-400/10 dark:text-sky-400">
                {isDesktop ? (
                  <Monitor size={24} strokeWidth={1.8} aria-hidden="true" />
                ) : (
                  <span className="text-lg font-bold">
                    {title.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
                {title}
              </p>

              <p className="mt-1 text-xs text-slate-500 dark:text-slate-500">
                {isDesktop ? "Application preview" : "Project preview"}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* =====================================================
          BOTTOM ACCENT
          ===================================================== */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-sky-500/60 via-sky-400/20 to-transparent transition-transform duration-500 group-hover:scale-x-100"
      />
    </div>
  );
}
