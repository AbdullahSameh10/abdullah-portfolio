export type ProjectCategory = "frontend" | "python" | "cpp";

export type ProjectStatus = "completed" | "in-progress";

export type ProjectLevel = "featured" | "showcase" | "supporting";

export type ProjectPreviewType = "web" | "desktop" | "terminal";

export interface Project {
  key: string;

  category: ProjectCategory;

  status: ProjectStatus;

  level: ProjectLevel;

  previewType: ProjectPreviewType;

  technologies: string[];

  githubUrl?: string;

  liveUrl?: string;

  image?: string;

  featured?: boolean;
}
