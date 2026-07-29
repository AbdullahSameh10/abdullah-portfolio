import { useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5">
      <h1 className="text-4xl font-bold">{t("hero.title")}</h1>

      <p>{t("hero.subtitle")}</p>

      <div className="flex gap-4">
        <button onClick={() => i18n.changeLanguage("en")}>English</button>

        <button onClick={() => i18n.changeLanguage("ar")}>العربية</button>

        <button onClick={() => i18n.changeLanguage("fr")}>Français</button>
      </div>
    </div>
  );
}
