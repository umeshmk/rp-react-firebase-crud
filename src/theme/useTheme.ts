import { useState } from "react";
import { PaletteMode, Theme, createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import { palette } from "./palette";
import { themeOptions } from "./themeOptions";

const lightTheme = createTheme(deepmerge(palette.light, themeOptions));
const darkTheme = createTheme(deepmerge(palette.dark, themeOptions));

export function useTheme() {
  const [mode, setMode] = useState<PaletteMode>("light");
  const [theme, setTheme] = useState<Theme>(lightTheme);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  if (isDarkTheme && mode === "light") {
    setTheme(darkTheme);
    setMode("dark");
  }

  if (!isDarkTheme && mode === "dark") {
    setTheme(lightTheme);
    setMode("light");
  }

  return [theme, isDarkTheme, setIsDarkTheme] as const;
}
