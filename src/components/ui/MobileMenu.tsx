import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown, Laptop, Moon, Sun, X } from "lucide-react";
import { useTranslation } from "react-i18next";

import { navigationItems } from "@Data/navigation";
import useTheme from "@Hooks/useTheme";
import type { Theme } from "@Types/index";
import { languages, type Language } from "@Data/languages";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const themeOptions: {
  value: Theme;
  icon: typeof Sun;
  label: string;
}[] = [
  {
    value: "light",
    icon: Sun,
    label: "Light",
  },
  {
    value: "system",
    icon: Laptop,
    label: "System",
  },
  {
    value: "dark",
    icon: Moon,
    label: "Dark",
  },
];

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { t, i18n } = useTranslation("navbar");
  const { t: tTheme } = useTranslation("theme");

  const { theme, setTheme } = useTheme();

  const [languageOpen, setLanguageOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const currentLanguage =
    languages.find((language) => language.code === i18n.language) ??
    languages[0];

  const currentTheme =
    themeOptions.find((option) => option.value === theme) ?? themeOptions[1];

  /*
   * Close menu when pressing Escape.
   */
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();

        if (themeOpen) {
          setThemeOpen(false);
          return;
        }

        if (languageOpen) {
          setLanguageOpen(false);
          return;
        }

        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, languageOpen, themeOpen, onClose]);

  /*
   * Prevent background scrolling while the menu is open.
   */
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  /*
   * Reset expandable sections when the menu closes.
   */
  useEffect(() => {
    if (!open) {
      setLanguageOpen(false);
      setThemeOpen(false);
    }
  }, [open]);

  /*
   * Focus the first navigation link when the menu opens.
   */
  useEffect(() => {
    if (!open) return;

    const timeout = window.setTimeout(() => {
      firstLinkRef.current?.focus();
    }, 100);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [open]);

  const handleLanguageSelect = (language: Language) => {
    i18n.changeLanguage(language.code);
    setLanguageOpen(false);
  };

  const handleThemeSelect = (value: Theme) => {
    setTheme(value);
    setThemeOpen(false);
  };

  return (
    <div
      id="mobile-menu"
      aria-hidden={!open}
      className={`fixed inset-0 z-[60] transition-all duration-500 ease-out lg:hidden ${
        open
          ? "pointer-events-auto visible opacity-100"
          : "pointer-events-none invisible opacity-0"
      } `}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close navigation menu"
        onClick={onClose}
        tabIndex={open ? 0 : -1}
        className="absolute inset-0 h-full w-full cursor-default bg-slate-950/30 backdrop-blur-md dark:bg-black/50"
      />

      {/* Menu Panel */}
      <div
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`absolute inset-x-3 bottom-3 top-3 flex flex-col overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/95 shadow-2xl backdrop-blur-2xl transition-all duration-500 ease-out dark:border-slate-700/70 dark:bg-slate-950/95 ${
          open ? "translate-y-0 scale-100" : "-translate-y-8 scale-[0.97]"
        } `}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200/70 px-5 py-4 dark:border-slate-800">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
              Navigation
            </p>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Explore my portfolio
            </p>
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            tabIndex={open ? 0 : -1}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition-all duration-300 hover:border-sky-500 hover:bg-sky-50 hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 active:scale-95 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:bg-slate-800 dark:hover:text-sky-400"
          >
            <X size={20} strokeWidth={2.25} />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 flex-col overflow-y-auto px-5 py-6">
          {/* Navigation Links */}
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1">
              {navigationItems.map((item, index) => (
                <li key={item.key}>
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    tabIndex={open ? 0 : -1}
                    onClick={onClose}
                    className="group flex items-center justify-between rounded-2xl px-4 py-3 text-lg font-semibold tracking-tight text-slate-800 transition-all duration-300 hover:bg-sky-50 hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 active:scale-[0.98] dark:text-slate-100 dark:hover:bg-slate-900 dark:hover:text-sky-400"
                  >
                    <span>{t(item.key)}</span>

                    <ArrowUpRight
                      size={20}
                      strokeWidth={2}
                      className="-translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Divider */}
          <div className="my-6 min-h-px w-full bg-slate-200/70 dark:bg-slate-800" />

          {/* Settings */}
          <div className="flex flex-col gap-2">
            {/* Language */}
            <div>
              <button
                type="button"
                aria-expanded={languageOpen}
                aria-controls="mobile-language-options"
                onClick={() => {
                  setLanguageOpen((prev) => !prev);
                  setThemeOpen(false);
                }}
                className="group flex min-h-14 w-full items-center justify-between rounded-2xl px-4 text-left transition-all duration-300 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:hover:bg-slate-900"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-500 dark:bg-sky-500/10 dark:text-sky-400">
                    <span className="text-lg" aria-hidden="true">
                      🌐
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                      {tTheme("language")}
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                      {tTheme(
                        currentLanguage.name.toLowerCase(),
                      )[0].toUpperCase() +
                        tTheme(currentLanguage.name.toLowerCase()).slice(1)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden text-sm font-medium text-slate-500 dark:text-slate-400 sm:block">
                    {tTheme(
                      currentLanguage.name.toLowerCase(),
                    )[0].toUpperCase() +
                      tTheme(currentLanguage.name.toLowerCase()).slice(1)}
                  </span>

                  <ChevronDown
                    size={18}
                    strokeWidth={2.25}
                    className={`text-slate-400 transition-transform duration-300 ${
                      languageOpen ? "rotate-180" : "rotate-0"
                    } `}
                  />
                </div>
              </button>

              {/* Language Options */}
              <div
                id="mobile-language-options"
                className={`overflow-hidden transition-all duration-300 ${
                  languageOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                } `}
              >
                <div
                  role="radiogroup"
                  aria-label="Language"
                  className="ml-13 flex flex-col gap-1 py-2"
                >
                  {languages.map((language) => {
                    const selected = language.code === currentLanguage.code;

                    return (
                      <button
                        key={language.code}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => handleLanguageSelect(language)}
                        tabIndex={open ? 0 : -1}
                        className={`flex min-h-11 items-center justify-between rounded-xl px-4 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                          selected
                            ? "bg-sky-50 text-sky-500 dark:bg-sky-500/10 dark:text-sky-400"
                            : "text-slate-600 hover:bg-slate-100 hover:text-sky-500 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-sky-400"
                        } `}
                      >
                        <span>{language.name}</span>

                        {selected && (
                          <span
                            aria-hidden="true"
                            className="h-2 w-2 rounded-full bg-sky-500"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Theme */}
            <div>
              <button
                type="button"
                aria-expanded={themeOpen}
                aria-controls="mobile-theme-options"
                onClick={() => {
                  setThemeOpen((prev) => !prev);
                  setLanguageOpen(false);
                }}
                className="group flex min-h-14 w-full items-center justify-between rounded-2xl px-4 text-left transition-all duration-300 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:hover:bg-slate-900"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-500 dark:bg-sky-500/10 dark:text-sky-400">
                    <currentTheme.icon size={19} strokeWidth={2.2} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                      Theme
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                      {currentTheme.label}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="hidden text-sm font-medium text-slate-500 dark:text-slate-400 sm:block">
                    {currentTheme.label}
                  </span>

                  <ChevronDown
                    size={18}
                    strokeWidth={2.25}
                    className={`text-slate-400 transition-transform duration-300 ${
                      themeOpen ? "rotate-180" : "rotate-0"
                    } `}
                  />
                </div>
              </button>

              {/* Theme Options */}
              <div
                id="mobile-theme-options"
                className={`overflow-hidden transition-all duration-300 ${
                  themeOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                } `}
              >
                <div
                  role="radiogroup"
                  aria-label="Theme"
                  className="ml-13 flex flex-col gap-1 py-2"
                >
                  {themeOptions.map(({ value, icon: Icon, label }) => {
                    const selected = theme === value;

                    return (
                      <button
                        key={value}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => handleThemeSelect(value)}
                        tabIndex={open ? 0 : -1}
                        className={`flex min-h-11 items-center justify-between rounded-xl px-4 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                          selected
                            ? "bg-sky-50 text-sky-500 dark:bg-sky-500/10 dark:text-sky-400"
                            : "text-slate-600 hover:bg-slate-100 hover:text-sky-500 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-sky-400"
                        } `}
                      >
                        <span className="flex items-center gap-3">
                          <Icon size={17} strokeWidth={2.2} />

                          {label}
                        </span>

                        {selected && (
                          <span
                            aria-hidden="true"
                            className="h-2 w-2 rounded-full bg-sky-500"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="shrink-0 border-t border-slate-200/70 px-5 py-5 dark:border-slate-800">
          <div className="grid grid-cols-2 gap-3">
            {/* Contact */}
            <a
              href="#contact"
              onClick={onClose}
              tabIndex={open ? 0 : -1}
              className="flex min-h-11 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-sky-500 hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 active:scale-[0.98] dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-400"
            >
              Let's Talk
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              download
              tabIndex={open ? 0 : -1}
              className="flex min-h-11 items-center justify-center rounded-xl bg-sky-500 px-4 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
