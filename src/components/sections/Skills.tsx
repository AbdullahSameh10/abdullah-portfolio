import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Wrench,
  Layers3,
  Lightbulb,
  MessageCircle,
  Users,
  BookOpen,
} from "lucide-react";

import { Container, Section } from "@Components/layout";
import { SectionHeading, SkillCard } from "@Components/ui";
import { skills, type SkillCategory } from "@Data/skills";
import { softSkills } from "@Data/softSkills";

const categoryIcons: Record<SkillCategory, typeof Code2> = {
  frontend: Layers3,
  programming: Code2,
  tools: Wrench,
};

const softSkillIcons = {
  problemSolving: Lightbulb,
  communication: MessageCircle,
  teamwork: Users,
  continuousLearning: BookOpen,
};

const categories: SkillCategory[] = ["frontend", "programming", "tools"];

export default function Skills() {
  const { t } = useTranslation("skills");
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="skills"
      aria-labelledby="skills-title"
      className="relative overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND DECORATION
          ===================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Top-right glow */}
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-400/10" />

        {/* Bottom-left glow */}
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />

        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.045)_1px,transparent_1px)] [background-size:32px_32px] dark:bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.04)_1px,transparent_1px)]" />
      </div>

      <Container className="relative z-10">
        {/* =====================================================
            SECTION HEADING
            ===================================================== */}
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />

        {/* =====================================================
            TECHNICAL SKILLS
            ===================================================== */}
        <div className="mt-14 space-y-12">
          {categories.map((category, categoryIndex) => {
            const Icon = categoryIcons[category];
            const categorySkills = skills[category];

            const isFeatured = category === "frontend";

            return (
              <motion.section
                key={category}
                aria-labelledby={`skills-${category}-title`}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 24 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        duration: 0.65,
                        delay: categoryIndex * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }
                }
              >
                {/* Category heading */}
                <div className="mb-5 flex items-start gap-4">
                  <div
                    className={`flex shrink-0 items-center justify-center rounded-xl border border-sky-500/15 bg-sky-500/10 text-sky-500 dark:border-sky-400/15 dark:bg-sky-400/10 dark:text-sky-400 ${
                      isFeatured ? "h-12 w-12" : "h-11 w-11"
                    }`}
                  >
                    <Icon
                      size={isFeatured ? 22 : 20}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3
                      id={`skills-${category}-title`}
                      className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white sm:text-xl"
                    >
                      {t(`categories.${category}.title`)}
                    </h3>

                    <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {t(`categories.${category}.description`)}
                    </p>
                  </div>
                </div>

                {/* Skill Grid */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {categorySkills.map((skill, index) => (
                    <SkillCard key={skill.key} skill={skill} index={index} />
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* =====================================================
            SOFT SKILLS
            ===================================================== */}
        <motion.section
          aria-labelledby="soft-skills-title"
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 0.65,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }
          }
          className="mt-16"
        >
          {/* Soft Skills heading */}
          <div className="mb-6 flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-500/15 bg-sky-500/10 text-sky-500 dark:border-sky-400/15 dark:bg-sky-400/10 dark:text-sky-400">
              <Users size={20} strokeWidth={2} aria-hidden="true" />
            </div>

            <div>
              <h3
                id="soft-skills-title"
                className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white sm:text-xl"
              >
                {t("softSkills.title")}
              </h3>

              <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                {t("softSkills.description")}
              </p>
            </div>
          </div>

          {/* Soft Skills Grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {softSkills.map(({ key }, index) => {
              const Icon = softSkillIcons[key as keyof typeof softSkillIcons];

              return (
                <motion.div
                  key={key}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 15 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : {
                          duration: 0.5,
                          delay: index * 0.07,
                          ease: [0.22, 1, 0.36, 1],
                        }
                  }
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/30 hover:shadow-lg hover:shadow-sky-500/5 dark:border-slate-800 dark:bg-slate-950/50 dark:hover:border-sky-400/30"
                >
                  {/* Hover glow */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-sky-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-sky-400/10"
                  />

                  <div className="relative flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500 transition-all duration-300 group-hover:scale-105 group-hover:bg-sky-500 group-hover:text-white dark:bg-sky-400/10 dark:text-sky-400 dark:group-hover:bg-sky-400 dark:group-hover:text-slate-950">
                      <Icon size={20} strokeWidth={2} aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                        {t(`softSkills.${key}.title`)}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {t(`softSkills.${key}.description`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </Container>
    </Section>
  );
}
