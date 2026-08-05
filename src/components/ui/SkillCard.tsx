import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";

import type { Skill } from "@Data/skills";

interface SkillCardProps {
  skill: Skill;
  index?: number;
}

export default function SkillCard({ skill, index = 0 }: SkillCardProps) {
  const { t } = useTranslation("skills");
  const shouldReduceMotion = useReducedMotion();

  const Icon = skill.icon;

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 0.5,
              delay: index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }
      }
      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-500/30 hover:shadow-xl hover:shadow-sky-500/10 dark:border-slate-800 dark:bg-slate-950/50 dark:hover:border-sky-400/30 dark:hover:shadow-sky-400/5"
    >
      {/* Hover glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-sky-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-sky-400/10"
      />

      <div className="relative flex items-center gap-4">
        {/* Technology Logo */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50 text-slate-700 transition-all duration-300 group-hover:scale-105 group-hover:border-sky-500/20 group-hover:bg-sky-50 group-hover:text-sky-500 dark:border-slate-700/80 dark:bg-slate-900 dark:text-slate-300 dark:group-hover:border-sky-400/20 dark:group-hover:bg-sky-500/10 dark:group-hover:text-sky-400">
          <Icon
            size={26}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Technology Info */}
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-slate-900 dark:text-white">
            {t(`items.${skill.key}`)}
          </h3>
        </div>
      </div>

      {/* Bottom accent */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-5 right-5 h-px origin-left scale-x-0 bg-gradient-to-r from-sky-500/60 via-sky-400/20 to-transparent transition-transform duration-500 group-hover:scale-x-100"
      />
    </motion.div>
  );
}
