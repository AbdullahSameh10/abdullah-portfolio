export interface Language {
  code: "en" | "ar" | "fr";
  name: string;
}

export const languages: Language[] = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "ar",
    name: "العربية",
  },
  {
    code: "fr",
    name: "Français",
  },
];
