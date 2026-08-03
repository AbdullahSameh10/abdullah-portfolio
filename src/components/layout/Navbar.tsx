import {
  LanguageSwitcher,
  Logo,
  MobileMenu,
  MobileMenuButton,
  ThemeSwitcher,
} from "@Components/ui";
import { navigationItems } from "@Data/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  const { t } = useTranslation("navbar");

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky left-0 right-0 top-6 z-50 mx-auto w-full px-6">
        <nav
          aria-label="Primary Navigation"
          className="mx-auto flex max-w-[1280px] justify-center rounded-full border border-slate-200/70 bg-white/80 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/80 dark:shadow-black/20"
        >
          <div className="grid w-full grid-cols-[auto_1fr_auto] items-center px-10 py-3">
            {/* Logo */}
            {screenWidth >= 500 ? <Logo /> : <Logo compact />}

            {/* Navigation */}

            <ul className="hidden justify-center lg:flex lg:gap-5 xl:gap-10">
              {navigationItems.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="relative py-1 text-[15px] font-medium text-slate-600 transition-colors duration-300 after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-sky-500 after:transition-all after:duration-300 hover:text-sky-500 hover:after:w-full dark:text-slate-300 dark:hover:text-sky-400"
                  >
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>

            {/* Actions */}

            <div className="hidden items-center gap-2 justify-self-end lg:flex">
              <ThemeSwitcher />

              <LanguageSwitcher />
            </div>
            <div className="flex justify-self-end lg:hidden">
              <MobileMenuButton
                open={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              />
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu open={mobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}
