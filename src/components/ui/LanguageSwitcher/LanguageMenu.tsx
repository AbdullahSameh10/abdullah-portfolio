import { useTranslation } from "react-i18next";
import LanguageItem from "./LanguageItem";
import { languages, type Language } from "./languages";

interface LanguageMenuProps {
  currentLanguage: Language["code"];
  onSelect: (code: Language["code"]) => void;
}

export default function LanguageMenu({
  currentLanguage,
  onSelect,
}: LanguageMenuProps) {
    const { t } = useTranslation("navbar");
  return (
    <div
      role="menu"
      aria-label="Language selector"
      className="w-48 p-0 flex items-center justify-center py-4 overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-2xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/90"
    >
      <div className="justify-self-center">
      {/* Header */}
      <div className="px-4 pb-5">
        <p className="text-[10px] font-bold tracking-[0.25em] text-slate-400 uppercase dark:text-slate-500">
          {t("language.title")}
        </p>
      </div>

      {/* Languages */}
      <div className="flex flex-col gap-2">
        {languages.map((language) => (
          <LanguageItem
            key={language.code}
            language={language}
            selected={language.code === currentLanguage}
            onSelect={onSelect}
          />
        ))}
      </div>
      </div>
    </div>
  );
}
