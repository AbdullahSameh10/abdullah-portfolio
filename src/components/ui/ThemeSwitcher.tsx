import { Laptop, Moon, Sun } from "lucide-react";
import useTheme from "@Hooks/useTheme";
import type { Theme } from "@Types/index";
import { useTranslation } from "react-i18next";
import type { LucideIcon } from "lucide-react";
import clsx from "clsx";

const themes: {
  value: Theme;
  icon: LucideIcon;
}[] = [
  {
    value: "light",
    icon: Sun,
  },
  {
    value: "system",
    icon: Laptop,
  },
  {
    value: "dark",
    icon: Moon,
  },
];

export default function ThemeSwitcher() {
    const { t } = useTranslation("theme");
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="group"
      aria-label={t("switcher")}
      className="flex items-center rounded-full border border-slate-200 bg-slate-100 p-1 dark:border-slate-700 dark:bg-slate-800/70"
    >
      {themes.map(({ value, icon: Icon }) => {
        const selected = theme === value;

        return (
          <button
            key={value}
            type="button"
            aria-label={t(value)}
            aria-pressed={selected}
            onClick={() => setTheme(value)}
            className={clsx(
              "flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:outline-none",
              selected ? "bg-sky-500 text-white" : "hover:bg-white dark:hover:bg-black",
            )}
          >
            <Icon size={18} strokeWidth={2.2} />
          </button>
        );
      })}
    </div>
  );
}
