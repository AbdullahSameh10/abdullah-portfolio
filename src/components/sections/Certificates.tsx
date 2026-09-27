import { useTranslation } from "react-i18next";
import { Container, Section, SectionDivider } from "@Components/layout";
import { CertificateCarousel, SectionHeading } from "@Components/ui";

import certificates from "@Data/certificates";

export default function Certificates() {
  const { t } = useTranslation("certificates");

  return (
    <Section
      id="certificates"
      aria-labelledby="certificates-title"
      className="relative"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-400/10" />

        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.045)_1px,transparent_1px)] [background-size:32px_32px] dark:bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.04)_1px,transparent_1px)]" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={t("section.eyebrow")}
          title={t("section.title")}
          description={t("section.description")}
        />

        <div className="mx-auto mt-14 max-w-5xl">
          <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/70 sm:p-7">
            <CertificateCarousel certificates={certificates} />
          </div>
        </div>
      </Container>

      <SectionDivider className="!absolute bottom-2 left-0 right-0 lg:-bottom-5" />
    </Section>
  );
}
