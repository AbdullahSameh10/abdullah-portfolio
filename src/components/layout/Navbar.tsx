import { LanguageSwitcher, Logo, ThemeSwitcher } from "@Components/ui";
import { navigationItems } from "@Data/navigation";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation("navbar");

  return (
    <header className="sticky max-w-7xl w-full mx-auto top-6 right-0 left-0 z-50">
      <div className="mx-auto w-full max-w-7xl px-4">
        <nav
          aria-label="Primary Navigation"
          className="mx-auto w-full max-w-7xl flex justify-center rounded-full border border-slate-200/70 bg-white/80 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/80 dark:shadow-black/20"
        >
          <div className="grid h-18 w-300 grid-cols-[auto_1fr_auto] items-center px-7">
            {/* Logo */}

            <Logo />

            {/* Navigation */}

            <ul className="hidden justify-center gap-10 lg:flex">
              {navigationItems.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="relative py-2 text-[15px] font-medium text-slate-600 transition-colors duration-300 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-sky-500 after:transition-all after:duration-300 hover:text-sky-500 hover:after:w-full dark:text-slate-300 dark:hover:text-sky-400"
                  >
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>

            {/* Actions */}

            <div className="flex items-center gap-2 justify-self-end">
              <LanguageSwitcher />

              <ThemeSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
