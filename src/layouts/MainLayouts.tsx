import type { ReactNode } from "react";

import { Navbar } from "@Components/layout";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-screen">{children}</main>
    </div>
  );
}
