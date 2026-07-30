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
    key: "experience",
    href: "#experience",
  },
  {
    key: "projects",
    href: "#projects",
  },
  {
    key: "certificates",
    href: "#certificates",
  },
  {
    key: "contact",
    href: "#contact",
  },
];
