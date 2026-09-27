import { Mail, MessageCircle } from "lucide-react";
import { FaGithub } from "react-icons/fa"
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";

import { Container, Section, SectionDivider } from "@Components/layout";
import { SectionHeading } from "@Components/ui";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { t } = useTranslation("contact");
  const shouldReduceMotion = useReducedMotion();

  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  if (!formRef.current) return;

  setIsSending(true);
  setStatus("idle");

  try {
    await emailjs.sendForm(
      import.meta.env.VITE_EMAIL_SERVICE,
      import.meta.env.VITE_EMAIL_TEMPLATE,
      formRef.current,
      {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      }
    );

    setStatus("success");
    formRef.current.reset();
  } catch (error) {
    console.error("EmailJS error:", error);
    setStatus("error");
  } finally {
    setIsSending(false);
  }
};

  return (
    <Section id="contact" aria-labelledby="contact-title" className="relative">
      {/* Background decoration */}
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
        <SectionHeading
          eyebrow={t("section.eyebrow")}
          title={t("section.title")}
          description={t("section.description")}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Contact information */}
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
            }
            className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/50 sm:p-8"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-500 dark:bg-sky-400/10 dark:text-sky-400">
              <MessageCircle size={21} aria-hidden="true" />
            </div>

            <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t("intro.title")}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
              {t("intro.description")}
            </p>

            <div className="mt-7 space-y-3">
              <a
                href="mailto:abdullah.sameh.101208@gmail.com"
                aria-label={t("email.label")}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-sky-500/30 hover:text-sky-500 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-300 dark:hover:border-sky-400/30 dark:hover:text-sky-400"
              >
                <Mail
                  size={17}
                  aria-hidden="true"
                  className="shrink-0 text-slate-400 transition-colors group-hover:text-sky-500 dark:text-slate-500 dark:group-hover:text-sky-400"
                />

                <span>{t("email.label")}</span>
              </a>

              <a
                href="https://github.com/AbdullahSameh10"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-sky-500/30 hover:text-sky-500 dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-300 dark:hover:border-sky-400/30 dark:hover:text-sky-400"
              >
                <FaGithub
                  size={17}
                  aria-hidden="true"
                  className="shrink-0 text-slate-400 transition-colors group-hover:text-sky-500 dark:text-slate-500 dark:group-hover:text-sky-400"
                />

                <span>{t("github.label")}</span>
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={
              shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.5,
                    delay: 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }
            }
            className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/50 sm:p-8"
          >
            <div className="grid gap-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-sm font-semibold text-slate-800 dark:text-slate-200"
                >
                  {t("form.name.label")}
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder={t("form.name.placeholder")}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950/50 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-sky-400"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="text-sm font-semibold text-slate-800 dark:text-slate-200"
                >
                  {t("form.email.label")}
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder={t("form.email.placeholder")}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950/50 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-sky-400"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="text-sm font-semibold text-slate-800 dark:text-slate-200"
                >
                  {t("form.message.label")}
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder={t("form.message.placeholder")}
                  required
                  className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-slate-950/50 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-sky-400"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:focus:ring-offset-slate-950"
              >
                {isSending ? t("form.sending") : t("form.submit")}
              </button>

              {status === "success" && (
                <p
                  role="status"
                  className="w-full rounded-md bg-green-600/30 p-4 text-center text-sm font-medium text-emerald-700 dark:bg-green-400/30 dark:text-emerald-400"
                >
                  {t("form.success")}
                </p>
              )}

              {status === "error" && (
                <p
                  role="alert"
                  className="w-full rounded-md bg-red-600/30 p-4 text-center text-sm font-medium text-red-700 dark:bg-red-400/30 dark:text-red-400"
                >
                  {t("form.error")}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </Container>
    </Section>
  );
}
