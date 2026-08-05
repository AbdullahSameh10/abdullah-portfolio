import type { IconType } from "react-icons";
import {
  SiArduino,
  SiC,
  SiCplusplus,
  SiCss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiPnpm,
  SiPython,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "@icons-pack/react-simple-icons";

export type SkillCategory = "frontend" | "programming" | "tools";

export interface Skill {
  key: string;
  icon: IconType;
  category: SkillCategory;
}

export const skills: Record<SkillCategory, Skill[]> = {
  frontend: [
    {
      key: "react",
      icon: SiReact,
      category: "frontend",
    },
    {
      key: "typescript",
      icon: SiTypescript,
      category: "frontend",
    },
    {
      key: "javascript",
      icon: SiJavascript,
      category: "frontend",
    },
    {
      key: "html",
      icon: SiHtml5,
      category: "frontend",
    },
    {
      key: "css",
      icon: SiCss,
      category: "frontend",
    },
    {
      key: "tailwind",
      icon: SiTailwindcss,
      category: "frontend",
    },
    {
      key: "bootstrap",
      icon: SiBootstrap,
      category: "frontend",
    },
    {
      key: "vite",
      icon: SiVite,
      category: "frontend",
    },
  ],

  programming: [
    {
      key: "c",
      icon: SiC,
      category: "programming",
    },
    {
      key: "cpp",
      icon: SiCplusplus,
      category: "programming",
    },
    {
      key: "python",
      icon: SiPython,
      category: "programming",
    },
  ],

  tools: [
    {
      key: "git",
      icon: SiGit,
      category: "tools",
    },
    {
      key: "github",
      icon: SiGithub,
      category: "tools",
    },
    {
      key: "pnpm",
      icon: SiPnpm,
      category: "tools",
    },
  ],
};
