export interface Language {
  code: "en" | "ar" | "fr";
  nativeName: string;
  englishName: string;
}

export const languages: Language[] = [
  {
    code: "en",
    nativeName: "English",
    englishName: "English",
  },
  {
    code: "ar",
    nativeName: "العربية",
    englishName: "Arabic",
  },
  {
    code: "fr",
    nativeName: "Français",
    englishName: "French",
  },
];
