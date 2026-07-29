import { ThemeContext } from "@Context/index";
import { useContext } from "react";

export default function useTheme() {
  return useContext(ThemeContext);
}
