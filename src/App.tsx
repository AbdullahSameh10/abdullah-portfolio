import { Navbar } from "@Components/layout";
import { useTheme } from "@Hooks/index";

export default function App() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <div className="flex min-h-screen flex-col items-center gap-6">
      <Navbar />
    </div>
  );
}
