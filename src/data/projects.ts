import type { Project } from "@Types/Project.types";

import calorieTrackerImage from "@Assets/Calorie Tracker.png";
import tkableImage from "@Assets/Tkable.png";
import restaurantImage from "@Assets/restaurant.jpg";

const projects: Project[] = [
  // ============================================================
  // FRONTEND
  // ============================================================

  {
    key: "exclusive",
    category: "frontend",
    status: "completed",
    level: "featured",
    previewType: "web",
    technologies: ["react", "typescript", "vite", "tailwind", "firebase"],
    githubUrl: "https://github.com/AbdullahSameh10/Exclusive",
    liveUrl: "https://exclusive-abdullahsameh10.vercel.app/",
    featured: true,
  },

  {
    key: "progBlog",
    category: "frontend",
    status: "completed",
    level: "showcase",
    previewType: "web",
    technologies: ["react", "typescript", "vite", "tailwind"],
    githubUrl: "https://github.com/AbdullahSameh10/Prog-Blog",
    liveUrl: "https://prog-blog.vercel.app/",
  },

  {
    key: "calorieTracker",
    category: "frontend",
    status: "completed",
    level: "showcase",
    previewType: "web",
    technologies: ["react", "javascript", "vite", "express", "sqlite"],
    githubUrl: "https://github.com/AbdullahSameh10/Calorie-Tracker-App",
    image: calorieTrackerImage,
  },

  {
    key: "kanbanBoard",
    category: "frontend",
    status: "completed",
    level: "showcase",
    previewType: "web",
    technologies: ["react", "javascript", "vite", "tailwind"],
    githubUrl: "https://github.com/AbdullahSameh10/Kanban-Board",
    liveUrl: "https://kanban-board-abdullahsameh10.vercel.app/",
  },

  {
    key: "cubmart",
    category: "frontend",
    status: "completed",
    level: "supporting",
    previewType: "web",
    technologies: ["html", "css", "javascript", "bootstrap"],
    githubUrl: "https://github.com/AbdullahSameh10/CubMart",
    liveUrl: "https://abdullahsameh10.github.io/CubMart/",
  },

  // ============================================================
  // PYTHON
  // ============================================================

  {
    key: "tkable",
    category: "python",
    status: "completed",
    level: "featured",
    previewType: "desktop",
    technologies: ["python", "tkinter"],
    githubUrl: "https://github.com/AbdullahSameh10/tkable",
    image: tkableImage,
  },

  {
    key: "expensesTracker",
    category: "python",
    status: "completed",
    level: "showcase",
    previewType: "desktop",
    technologies: ["python", "tkinter"],
  },

  {
    key: "weatherApp",
    category: "python",
    status: "completed",
    level: "supporting",
    previewType: "desktop",
    technologies: ["python", "api"],
  },

  {
    key: "dragonBallGame",
    category: "python",
    status: "in-progress",
    level: "supporting",
    previewType: "desktop",
    technologies: ["python", "pygame"],
  },

  // ============================================================
  // C++
  // ============================================================

  {
    key: "bankSystem",
    category: "cpp",
    status: "completed",
    level: "featured",
    previewType: "terminal",
    technologies: ["cpp"],
  },

  {
    key: "restaurantSystem",
    category: "cpp",
    status: "completed",
    level: "showcase",
    previewType: "terminal",
    technologies: ["cpp"],
    image: restaurantImage,
  },
];

export default projects;
