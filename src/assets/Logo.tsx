import styles from "@/globals.module.css";

interface LogoProps {
  compact?: boolean;
}

export default function Logo({ compact = false }: LogoProps) {
  return (
    <div
      //   to="/"
      className="group flex items-center gap-3 select-none"
      aria-label="Abdullah Sameh"
    >
      {/* Logo Mark */}
      <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
        {/* Accent Glow */}
        <div className="absolute inset-0 bg-linear-to-br from-sky-500/10 via-blue-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Initials */}
        <span
          className={`${styles.logo} relative text-lg font-extrabold tracking-tight`}
        >
          <span className="text-sky-500">A</span>
          <span className="text-slate-900 dark:text-white">S</span>
        </span>
      </div>

      {!compact && (
        <div className="leading-tight">
          <h1 className="text-base font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-sky-500 dark:text-white">
            Abdullah Sameh
          </h1>

          <p className="text-xs font-medium tracking-wide text-slate-500 dark:text-slate-400">
            Frontend Web Developer
          </p>
        </div>
      )}
    </div>
  );
}
