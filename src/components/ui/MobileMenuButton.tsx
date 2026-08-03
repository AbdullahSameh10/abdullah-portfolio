import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
  open: boolean;
  onClick: () => void;
}

export default function MobileMenuButton({
  open,
  onClick,
}: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={open}
      aria-controls="mobile-menu"
      className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-sky-500 hover:text-sky-500 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 active:scale-95 lg:hidden dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-400"
    >
      <div className="relative h-5 w-5">
        {/* Menu Icon */}
        <Menu
          size={20}
          strokeWidth={2.25}
          className={`absolute inset-0 transition-all duration-300 ${
            open
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          } `}
        />

        {/* Close Icon */}
        <X
          size={20}
          strokeWidth={2.25}
          className={`absolute inset-0 transition-all duration-300 ${
            open
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          } `}
        />
      </div>
    </button>
  );
}
