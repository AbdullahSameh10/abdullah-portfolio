import { Globe, Monitor, Terminal } from "lucide-react";

import type { Project } from "@Types/Project.types";

interface ProjectPreviewProps {
  project: Project;
  title: string;
}

export default function ProjectPreview({
  project,
  title,
}: ProjectPreviewProps) {
  const isDesktop = project.previewType === "desktop";
  const isTerminal = project.previewType === "terminal";

  const displayUrl = project.liveUrl
    ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : title;

  const addressLabel = isTerminal
    ? `${displayUrl.replaceAll(" ", "_")}.exe`
    : displayUrl;

  const PlaceholderIcon = isTerminal ? Terminal : isDesktop ? Monitor : Globe;

  return (
    <div className={`pj-preview ${isTerminal ? "pj-preview--terminal" : ""}`}>
      <div className="pj-chrome" aria-hidden="true">
        <span className="pj-dots">
          <i />
          <i />
          <i />
        </span>

        <span className="pj-address">{addressLabel}</span>
      </div>

      <div className="pj-screen">
        {/* Static image */}
        {project.image && (
          <img
            src={project.image}
            alt={`${title} ${isTerminal ? "terminal output" : "preview"}`}
            loading="lazy"
          />
        )}

        {/* Placeholder */}
        {!project.liveUrl && !project.image && (
          <div className="pj-placeholder" aria-hidden="true">
            <div className="pj-placeholder-icon">
              <PlaceholderIcon size={24} strokeWidth={1.8} />
            </div>

            <span className="pj-placeholder-label">{title}</span>
          </div>
        )}
      </div>
    </div>
  );
}
