import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "@Locales/en/common.json";
import enNavbar from "@Locales/en/navbar.json";
import enTheme from "@Locales/en/theme.json";
import enHero from "@Locales/en/hero.json";
import enAbout from "@Locales/en/about.json";
import enSkills from "@Locales/en/skills.json";

import arCommon from "@Locales/ar/common.json";
import arNavbar from "@Locales/ar/navbar.json";
import arTheme from "@Locales/ar/theme.json";
import arHero from "@Locales/ar/hero.json";
import arAbout from "@Locales/ar/about.json";
import arSkills from "@Locales/ar/skills.json";

import frCommon from "@Locales/fr/common.json";
import frNavbar from "@Locales/fr/navbar.json";
import frTheme from "@Locales/fr/theme.json";
import frHero from "@Locales/fr/hero.json";
import frAbout from "@Locales/fr/about.json";
import frSkills from "@Locales/fr/skills.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        navbar: enNavbar,
        theme: enTheme,
        hero: enHero,
        about: enAbout,
        skills: enSkills,
      },

      ar: {
        common: arCommon,
        navbar: arNavbar,
        theme: arTheme,
        hero: arHero,
        about: arAbout,
        skills: arSkills,
      },

      fr: {
        common: frCommon,
        navbar: frNavbar,
        theme: frTheme,
        hero: frHero,
        about: frAbout,
        skills: frSkills,
      },
    },

    defaultNS: "common",
    ns: ["common", "navbar", "theme", "hero", "about", "skills"],

    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
