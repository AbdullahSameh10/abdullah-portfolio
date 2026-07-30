import {Logo} from "@Assets/index";
import {useTheme} from "@Hooks/index";

export default function App() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <Logo/>
      <h1 className="text-5xl font-bold">{resolvedTheme.toUpperCase()} MODE</h1>

      <p>Current setting: {theme}</p>

      <div className="flex gap-4">
        <button
          onClick={() => setTheme("light")}
          className="rounded-lg border px-5 py-2"
        >
          Light
        </button>

        <button
          onClick={() => setTheme("dark")}
          className="rounded-lg border px-5 py-2"
        >
          Dark
        </button>

        <button
          onClick={() => setTheme("system")}
          className="rounded-lg border px-5 py-2"
        >
          System
        </button>
      </div>
    </div>
  );
}
