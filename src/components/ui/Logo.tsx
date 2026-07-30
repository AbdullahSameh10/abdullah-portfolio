interface LogoProps {
  compact?: boolean;
}

export default function Logo({ compact = false }: LogoProps) {
  return (
    <a
      href="#home"
      aria-label="Abdullah Sameh"
      className="group flex cursor-pointer items-center gap-4 select-none"
    >
      {/* Logo */}

      <div className="relative flex h-13 w-13 items-center justify-center overflow-hidden rounded-xl border-2 border-sky-500/70 bg-white shadow-md transition-all duration-300 group-hover:shadow-sky-500/20 dark:border-sky-400/70 dark:bg-slate-950">
        {/* Glow */}

        <div className="absolute inset-0 bg-linear-to-br from-sky-500/15 via-blue-500/10 to-transparent opacity-100" />

        {/* Initials */}

        <div className="font-sansation relative h-8 w-8">
          {/* S */}

          <span className="absolute top-1/2 left-[42%] -translate-y-1/2 text-[2rem] leading-none font-bold text-slate-900 dark:text-white">
            S
          </span>

          {/* A */}

          <span className="absolute top-1/2 left-0 z-10 -translate-y-1/2 text-[2rem] leading-none font-bold text-sky-500">
            A
          </span>
        </div>
      </div>

      {!compact && (
        <>
          {/* Divider */}

          <div className="h-11 w-px bg-slate-300 dark:bg-slate-700" />

          {/* Text */}

          <div className="leading-none">
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
              <span className="text-sky-500">Abdullah</span> Sameh
            </h1>

            <p className="mt-1 text-[10px] font-medium tracking-[0.38em] text-slate-500 uppercase dark:text-slate-400">
              Frontend Developer
            </p>
          </div>
        </>
      )}
    </a>
  );
}
