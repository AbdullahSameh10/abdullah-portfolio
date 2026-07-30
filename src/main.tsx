import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@I18n/index";
import { ThemeProvider } from "@Context/index";
import "@fontsource/sansation";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
