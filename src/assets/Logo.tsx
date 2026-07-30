interface LogoProps {
  compact?: boolean;
}

export default function Logo({ compact = false }: LogoProps) {
  return (
    <div
      className="group flex scale-75 items-center gap-5 select-none cursor-pointer transition-transform duration-300 active:scale-95"
      aria-label="Abdullah Sameh"
    >
      {/* Logo Mark */}
      <div className="relative flex h-16 w-17.5 items-center justify-center overflow-hidden rounded-2xl border-2 border-sky-500/70 bg-white shadow-md transition-all duration-300 dark:border-sky-400/70 dark:bg-slate-950">
        {/* Glow */}
        <div className="absolute inset-0 bg-linear-to-br from-sky-500/15 via-blue-500/10 to-transparent transition-opacity duration-300 opacity-100" />

        {/* Initials */}
        <div className="font-sansation relative h-9 w-9">
          {/* S (Behind) */}
          <span className="absolute top-1/2 left-[40%] -translate-y-1/2 text-4xl leading-none font-bold text-slate-900 dark:text-white">
            S
          </span>

          {/* A (Front) */}
          <span className="absolute top-1/2 left-0 z-10 -translate-y-1/2 text-4xl leading-none font-bold text-sky-500">
            A
          </span>
        </div>
      </div>

      {!compact && (
        <>
          {/* Divider */}
          <div className="h-12 w-px bg-slate-300 dark:bg-slate-700" />

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 transition-colors duration-300 dark:text-white">
              <span className="text-sky-500">Abdullah</span> Sameh
            </h1>

            <p className="mt-1 text-[11px] text-center font-medium tracking-[0.45em] text-slate-500 uppercase dark:text-slate-400">
              Frontend Developer
            </p>
          </div>
        </>
      )}
    </div>
  );
}
