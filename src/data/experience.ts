export type ExperienceType = "self-directed" | "program" | "learning";

export interface Experience {
  key: string;
  type: ExperienceType;
  startYear: number;
  endYear?: number;
  current?: boolean;
  technologies: string[];
}

const experience: Experience[] = [
  {
    key: "selfDirectedLearning",
    type: "self-directed",
    startYear: 2017,
    current: true,
    technologies: [
      "programming",
      "problemSolving",
      "webDevelopment",
      "personalProjects",
    ],
  },

  {
    key: "futureMakersKids",
    type: "program",
    startYear: 2020,
    endYear: 2023,
    technologies: [
      "programming",
      "c",
      "cpp",
      "python",
      "electronics",
      "arduino",
    ],
  },

  {
    key: "deci",
    type: "program",
    startYear: 2024,
    current: true,
    technologies: [
      "mobileDevelopment",
      "electronics",
      "html",
      "css",
      "figma",
      "wireframing",
    ],
  },

  {
    key: "yat",
    type: "learning",
    startYear: 2024,
    endYear: 2025,
    technologies: [
      "python",
      "tkinter",
      "turtle",
      "webDevelopment",
      "fileHandling",
    ],
  },

  {
    key: "almdrasa",
    type: "learning",
    startYear: 2025,
    endYear: 2026,
    technologies: [
      "python",
      "java",
      "dataStructures",
      "html",
      "css",
      "javascript",
      "react",
      "typescript",
    ],
  },
];

export default experience;
