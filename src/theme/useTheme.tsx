import { useEffect, useState } from "react";
import { Theme, createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import { palette } from "./palette";
import { themeOptions } from "./themeOptions";
import { useUserPreferDarkMode } from "./useUserPreferDarkMode";

const lightTheme = createTheme(deepmerge(palette.light, themeOptions));
const darkTheme = createTheme(deepmerge(palette.dark, themeOptions));

export function useTheme() {
  const { userPrefersDark, toggleUserPrefers } = useUserPreferDarkMode();
  const [isDarkTheme, setIsDarkTheme] = useState(userPrefersDark);
  const [theme, setTheme] = useState<Theme>(
    userPrefersDark ? darkTheme : lightTheme
  );

  useEffect(() => {
    setIsDarkTheme(userPrefersDark);
  }, [userPrefersDark]);

  useEffect(() => {
    if (isDarkTheme) setTheme(darkTheme);
    else setTheme(lightTheme);
  }, [isDarkTheme]);

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme);
    toggleUserPrefers();
  }

  return { theme, isDarkTheme, toggleTheme } as const;
}
