import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import useTheme from "@Hooks/useTheme";
import styles from "@/globals.module.css";

export default function ThemeSwitcher() {
  const { t } = useTranslation("theme");
  const { theme, resolvedTheme, setTheme } = useTheme();

  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedTheme, setDisplayedTheme] = useState(resolvedTheme);

  /*
   * Keep the displayed icon synchronized with the actual
   * resolved theme when the theme changes externally.
   */
  useEffect(() => {
    if (!isAnimating) {
      setDisplayedTheme(resolvedTheme);
    }
  }, [resolvedTheme, isAnimating]);

  const toggleTheme = () => {
    if (isAnimating) return;

    const nextTheme = resolvedTheme === "light" ? "dark" : "light";

    setIsAnimating(true);

    /*
     * Change the theme during the rotation rather than
     * immediately replacing the icon.
     */
    window.setTimeout(() => {
      setTheme(nextTheme);
      setDisplayedTheme(nextTheme);
    }, 180);

    /*
     * End the animation after one complete rotation.
     */
    window.setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const isLight = displayedTheme === "light";
  const Icon = isLight ? Sun : Moon;

  return (
    <button
      type="button"
      aria-label={t(isLight ? "dark" : "light")}
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
      className={clsx(
        "group relative flex h-9 w-9 items-center justify-center",
        "rounded-full border border-slate-200",
        "bg-white/80 text-slate-600 shadow-sm",
        "transition-all duration-300",
        "hover:border-sky-500 hover:bg-sky-50 hover:text-sky-500",
        "hover:shadow-md",
        "focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-sky-500",
        "focus-visible:ring-offset-2",
        "active:scale-95",
        "dark:border-slate-700",
        "dark:bg-slate-900/80",
        "dark:text-slate-300",
        "dark:hover:border-sky-400",
        "dark:hover:bg-sky-500/10",
        "dark:hover:text-sky-400",
      )}
    >
      <span
        aria-hidden="true"
        className={clsx(
          "flex items-center justify-center",
          isAnimating && styles.animateThemeRotate,
        )}
      >
        <Icon
          key={displayedTheme}
          size={18}
          strokeWidth={2.2}
          className="transition-colors duration-200"
        />
      </span>
    </button>
  );
}
