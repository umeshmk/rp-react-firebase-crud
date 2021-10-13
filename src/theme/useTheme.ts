import { useEffect, useState } from "react";
import { Theme, createTheme, useMediaQuery } from "@mui/material";
import { deepmerge } from "@mui/utils";
import { palette } from "./palette";
import { themeOptions } from "./themeOptions";

const lightTheme = createTheme(deepmerge(palette.light, themeOptions));
const darkTheme = createTheme(deepmerge(palette.dark, themeOptions));

export function useTheme() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState<Theme>(lightTheme);
  const [isDarkTheme, setIsDarkTheme] = useState(prefersDarkMode);

  useEffect(() => {
    setIsDarkTheme(prefersDarkMode);
  }, [prefersDarkMode]);

  useEffect(() => {
    if (isDarkTheme) setTheme(darkTheme);
    else setTheme(lightTheme);
  }, [isDarkTheme]);

  return [theme, isDarkTheme, setIsDarkTheme] as const;
}
