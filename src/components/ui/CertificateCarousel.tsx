import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";

import type Certificate from "@Types/Certificate.types";

interface CertificateCarouselProps {
  certificates: Certificate[];
}

export default function CertificateCarousel({
  certificates,
}: CertificateCarouselProps) {
  const { t } = useTranslation("certificates");
  const { t: tCommon } = useTranslation("common");
  const shouldReduceMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const activeCertificate = certificates[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? certificates.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === certificates.length - 1 ? 0 : current + 1,
    );
  };

  const goToCertificate = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsImageLoading(true);
      setImageError(false);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [activeIndex]);

  if (!activeCertificate) {
    return null;
  }

  return (
    <div aria-label={t("certificateNavigation")} className="relative">
      <div className="grid gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-center">
        {/* Certificate preview */}
        <motion.div
          key={activeCertificate.key}
          initial={
            shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 12 }
          }
          animate={{ opacity: 1, x: 0 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }
          }
          className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950/50"
        >
          <div className="relative flex min-h-[320px] items-center justify-center bg-slate-50 p-3 dark:bg-slate-950/50 sm:min-h-[420px]">
            {/* Loading skeleton */}
            {isImageLoading && !imageError && (
              <div
                aria-hidden="true"
                className="absolute inset-3 flex animate-pulse items-center justify-center rounded-xl bg-slate-200 text-xl font-semibold text-slate-950 dark:bg-slate-800 dark:text-slate-300"
              >
                {tCommon("loading")}
              </div>
            )}

            {/* Error fallback */}
            {imageError && (
              <div className="flex min-h-[320px] flex-col items-center justify-center px-6 text-center sm:min-h-[420px]">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  {t("previewUnavailable")}
                </p>
              </div>
            )}

            {/* Certificate image */}
            {!imageError && (
              <img
                src={activeCertificate.previewUrl}
                referrerPolicy="no-referrer"
                alt={t(`${activeCertificate.key}.title`)}
                loading="eager"
                onLoad={() => setIsImageLoading(false)}
                onError={() => {
                  setIsImageLoading(false);
                  setImageError(true);
                }}
                className={`relative z-10 block max-h-[400px] w-full object-contain transition-opacity duration-300 sm:max-h-[440px] ${
                  isImageLoading ? "opacity-0" : "opacity-100"
                }`}
              />
            )}
          </div>
        </motion.div>

        {/* Certificate information */}
        <motion.div
          key={`${activeCertificate.key}-info`}
          initial={
            shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 0.3,
                  delay: 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }
          }
        >
          <span className="inline-flex rounded-full border border-sky-500/20 bg-sky-500/5 px-3 py-1 text-xs font-semibold text-sky-600 dark:border-sky-400/20 dark:bg-sky-400/5 dark:text-sky-400">
            {t(`providers.${activeCertificate.provider}`)}
          </span>

          <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {t(`${activeCertificate.key}.title`)}
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
            {t(`${activeCertificate.key}.description`)}
          </p>

          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {t("issued")}
            </p>

            <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
              {activeCertificate.date}
            </p>
          </div>

          {activeCertificate.certificateId && (
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                {t("certificateId")}
              </p>

              <p className="mt-1 font-mono text-sm text-slate-700 dark:text-slate-300">
                {activeCertificate.certificateId}
              </p>
            </div>
          )}

          <a
            href={activeCertificate.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
          >
            {t("viewCertificate")}
            <ExternalLink size={15} aria-hidden="true" />
          </a>
        </motion.div>
      </div>

      {/* Carousel controls */}
      <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-5 dark:border-slate-800">
        <button
          type="button"
          onClick={goToPrevious}
          aria-label={t("previous")}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:border-sky-500/30 hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-sky-400/30 dark:hover:text-sky-400 dark:focus:ring-offset-slate-950"
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>

        <div
          role="tablist"
          aria-label={t("certificateNavigation")}
          className="flex items-center gap-1.5"
        >
          {certificates.map((certificate, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={certificate.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={t("goToCertificate", {
                  number: index + 1,
                })}
                onClick={() => goToCertificate(index)}
                className={`h-1.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950 ${
                  isActive
                    ? "w-6 bg-sky-500"
                    : "w-1.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600"
                }`}
              />
            );
          })}
        </div>

        <button
          type="button"
          onClick={goToNext}
          aria-label={t("next")}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:border-sky-500/30 hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-sky-400/30 dark:hover:text-sky-400 dark:focus:ring-offset-slate-950"
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>

      <p className="mt-3 text-center text-xs text-slate-400 dark:text-slate-500">
        {activeIndex + 1} / {certificates.length}
      </p>
    </div>
  );
}
