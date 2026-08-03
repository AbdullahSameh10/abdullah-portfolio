import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Languages,Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

import LanguageMenu from "./LanguageMenu";
import { languages } from "./languages";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const currentLanguage = useMemo(() => {
    return (
      languages.find((language) => language.code === i18n.language) ??
      languages[0]
    );
  }, [i18n.language]);

  useEffect(() => {
    document.documentElement.lang = i18n.language;

    document.documentElement.dir =
      i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          event.preventDefault();
          setOpen(false);
          buttonRef.current?.focus();
          break;

        case "ArrowDown":
        case "ArrowUp":
          event.preventDefault();

          const items = Array.from(
            containerRef.current?.querySelectorAll<HTMLButtonElement>(
              '[role="menuitemradio"]',
            ) ?? [],
          );

          if (!items.length) return;

          const activeIndex = items.findIndex(
            (item) => item === document.activeElement,
          );

          let nextIndex = 0;

          if (event.key === "ArrowDown") {
            nextIndex =
              activeIndex === -1 ? 0 : (activeIndex + 1) % items.length;
          } else {
            nextIndex =
              activeIndex === -1
                ? items.length - 1
                : (activeIndex - 1 + items.length) % items.length;
          }

          items[nextIndex]?.focus();
          break;
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);
  useEffect(() => {
    if (!open) return;

    const selectedItem = containerRef.current?.querySelector<HTMLButtonElement>(
      '[aria-checked="true"]',
    );

    selectedItem?.focus();
  }, [open]);

  const handleLanguageSelect = async (
    code: (typeof languages)[number]["code"],
  ) => {
    if (code === currentLanguage.code) {
      setOpen(false);
      buttonRef.current?.focus();
      return;
    }

    await i18n.changeLanguage(code);

    setOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-label={`Current language ${currentLanguage.nativeName}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="language-menu"
        onClick={() => setOpen((prev) => !prev)}
        className="w-25 group flex h-10 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 p-1 px-3 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-500 hover:text-sky-500 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 active:translate-y-0 active:scale-95 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-400"
      >
        <Globe
          size={18}
          strokeWidth={2.2}
          className="transition-transform duration-500 group-hover:rotate-180"
        />

        <span className="min-w-6 text-center uppercase">
          {currentLanguage.code}
        </span>

        <ChevronDown
          size={16}
          strokeWidth={2.5}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {/* Language Menu */}
      <div
        id="language-menu"
        className={`absolute right-0 top-[calc(100%+12px)] z-50 origin-top-right transition-all duration-300 ease-out ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-[0.97] opacity-0"
        } `}
      >
        <LanguageMenu
          currentLanguage={currentLanguage.code}
          onSelect={handleLanguageSelect}
        />
      </div>
    </div>
  );
}