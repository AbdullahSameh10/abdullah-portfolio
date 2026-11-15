import { Globe, Monitor, Terminal } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import type { Project } from "@Types/Project.types";

interface ProjectPreviewProps {
  project: Project;
  title: string;
}

/**
 * The live site is rendered at a desktop-sized viewport and scaled down to
 * fit the preview box, so the thumbnail always shows the whole page layout
 * instead of a cropped corner of it.
 */
const VIEWPORT_WIDTH = 1280;

export default function ProjectPreview({
  project,
  title,
}: ProjectPreviewProps) {
  const screenRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const isWeb = project.previewType === "web";
  const isDesktop = project.previewType === "desktop";
  const isTerminal = project.previewType === "terminal";

  // Measure the box, and only load the iframe once it is (almost) on screen.
  useEffect(() => {
    const element = screenRef.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      setSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });
    resizeObserver.observe(element);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          intersectionObserver.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    intersectionObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, []);

  const scale = size.width ? size.width / VIEWPORT_WIDTH : 0;
  const virtualHeight = scale ? size.height / scale : 0;

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

      <div ref={screenRef} className="pj-screen">

        {/* Static image (screenshot, logo, terminal output) */}
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
