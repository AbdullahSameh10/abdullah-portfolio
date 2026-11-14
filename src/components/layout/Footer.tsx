import { ArrowUp, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Container } from "@Components/layout";
import { navigationItems } from "@Data/navigation";

export default function Footer() {
  const { t: footerT } = useTranslation("footer");
  const { t: navbarT } = useTranslation("navbar");
  const shouldReduceMotion = useReducedMotion();

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      aria-label={footerT("ariaLabel")}
      initial={
        shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
      }
      className="relative border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
    >
      <Container>
        {/* Main Footer */}
        <div className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          {/* Brand & Description */}
          <div className="max-w-md">
            <a
              href="#home"
              aria-label={footerT("brand.homeLabel")}
              className="inline-flex items-center gap-2 rounded-md text-xl font-bold tracking-tight text-slate-900 outline-none transition-colors hover:text-sky-500 focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-white dark:hover:text-sky-400"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-sky-500/40 bg-sky-500/10 text-sm text-sky-500">
                AS
              </span>

              <span>
                Abdullah <span className="text-sky-500">Sameh</span>
              </span>
            </a>

            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
              {footerT("description")}
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://github.com/AbdullahSameh10"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={footerT("social.github")}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition-all hover:-translate-y-1 hover:border-sky-500/40 hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-sky-400/40 dark:hover:text-sky-400"
              >
                <FaGithub size={19} aria-hidden="true" />
              </a>

              <a
                href="mailto:abdullah.sameh.101208@gmail.com"
                aria-label={footerT("social.email")}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition-all hover:-translate-y-1 hover:border-sky-500/40 hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-sky-400/40 dark:hover:text-sky-400"
              >
                <Mail size={19} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <nav
            aria-label={footerT("navigation.ariaLabel")}
            className="lg:justify-self-end"
          >
            <h2 className="text-sm font-bold tracking-wider text-slate-900 dark:text-white">
              {footerT("navigation.title")}
            </h2>

            <ul className="mt-5 grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-3 lg:grid-cols-2">
              {navigationItems.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="inline-flex rounded-sm text-sm text-slate-600 outline-none transition-colors hover:text-sky-500 focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-slate-400 dark:hover:text-sky-400"
                  >
                    {navbarT(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-slate-200 py-6 dark:border-slate-800 sm:flex-row">
          <p className="text-center text-xs leading-6 text-slate-500 dark:text-slate-400 sm:text-left">
            {footerT("copyright", { year: currentYear })}
          </p>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-slate-600 outline-none transition-colors hover:text-sky-500 focus-visible:ring-2 focus-visible:ring-sky-500 dark:text-slate-400 dark:hover:text-sky-400"
          >
            {footerT("backToTop")}

            <ArrowUp
              size={15}
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-1"
            />
          </a>
        </div>
      </Container>
    </motion.footer>
  );
}
