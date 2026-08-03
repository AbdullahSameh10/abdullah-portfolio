import { Check } from "lucide-react";
import type { Language } from "./languages";

interface LanguageItemProps {
  language: Language;
  selected: boolean;
  onSelect: (code: Language["code"]) => void;
}

export default function LanguageItem({
  language,
  selected,
  onSelect,
}: LanguageItemProps) {
  return (
    <button
      type="button"
      role="menuitemradio"
      aria-checked={selected}
      tabIndex={selected ? 0 : -1}
      onClick={() => onSelect(language.code)}
      className={`group flex w-[160px] mx-2 items-center justify-between rounded-2xl py-1 px-4 text-left transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 ${
        selected
          ? "bg-slate-950 text-white shadow-lg dark:bg-sky-500"
          : "hover:bg-slate-100 dark:hover:bg-slate-800"
      } `}
    >
      {/* Language Names */}
      <div className="flex flex-col">
        <span
          className={`text-base font-semibold ${
            selected ? "text-white" : "text-slate-900 dark:text-slate-100"
          }`}
        >
          {language.nativeName}
        </span>

        <span
          className={`mt-1 text-sm ${
            selected
              ? "text-slate-300 dark:text-sky-100"
              : "text-slate-500 dark:text-slate-400"
          }`}
        >
          {language.englishName}
        </span>
      </div>

      {/* Selected Icon */}
      <div
        className={`transition-all duration-200 ${
          selected
            ? "scale-100 opacity-100"
            : "scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-40"
        } `}
      >
        <Check
          size={20}
          strokeWidth={2.5}
          className={
            selected ? "text-white" : "text-slate-400 dark:text-slate-500"
          }
        />
      </div>
    </button>
  );
}
