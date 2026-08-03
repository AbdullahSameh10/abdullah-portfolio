import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [
    react()
  ],

  resolve: {
    alias: {
      "@Assets": path.resolve(__dirname, "./src/assets"),
      "@Components": path.resolve(__dirname, "./src/components"),
      "@Layouts": path.resolve(__dirname, "./src/layouts"),
      "@Pages": path.resolve(__dirname, "./src/pages"),
      "@Hooks": path.resolve(__dirname, "./src/hooks"),
      "@Utils": path.resolve(__dirname, "./src/utils"),
      "@Data": path.resolve(__dirname, "./src/data"),
      "@Context": path.resolve(__dirname, "./src/context"),
      "@Types": path.resolve(__dirname, "./src/types"),
      "@Services": path.resolve(__dirname, "./src/services"),
      "@Styles": path.resolve(__dirname, "./src/styles"),
      "@Locales": path.resolve(__dirname, "./src/locales"),
      "@I18n": path.resolve(__dirname, "./src/i18n"),
      
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
