export interface NavigationItem {
  key:
    | "home"
    | "about"
    | "skills"
    | "experience"
    | "projects"
    | "certificates"
    | "contact";
  href: string;
}

export const navigationItems: NavigationItem[] = [
  {
    key: "home",
    href: "#home",
  },
  {
    key: "about",
    href: "#about",
  },
  {
    key: "skills",
    href: "#skills",
  },
  {
    key: "projects",
    href: "#projects",
  },
  {
    key: "contact",
    href: "#contact",
  },
];
