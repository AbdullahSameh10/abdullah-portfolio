import { useEffect, useMemo, useState } from "react";
import { Theme } from "@Types/index";
import ThemeContext from "./ThemeContext";

const STORAGE_KEY = "portfolio-theme";

function getSystemTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem(STORAGE_KEY) as Theme) || "system";
  });

  const [systemTheme, setSystemTheme] = useState(getSystemTheme());

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = () => {
      setSystemTheme(media.matches ? "dark" : "light");
    };

    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, []);

  const resolvedTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");

    document.documentElement.classList.add(resolvedTheme);

    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, resolvedTheme]);

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme,
    }),
    [theme, resolvedTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
