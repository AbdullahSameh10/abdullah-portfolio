import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "@Locales/en/common.json";
import enNavbar from "@Locales/en/navbar.json";
import enTheme from "@Locales/en/theme.json";

import arCommon from "@Locales/ar/common.json";
import arNavbar from "@Locales/ar/navbar.json";
import arTheme from "@Locales/ar/theme.json";

import frCommon from "@Locales/fr/common.json";
import frNavbar from "@Locales/fr/navbar.json";
import frTheme from "@Locales/fr/theme.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        navbar: enNavbar,
        theme: enTheme,
      },

      ar: {
        common: arCommon,
        navbar: arNavbar,
        theme: arTheme,
      },

      fr: {
        common: frCommon,
        navbar: frNavbar,
        theme: frTheme,
      },
    },

    defaultNS: "common",
    ns: ["common", "navbar", "theme"],

    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
