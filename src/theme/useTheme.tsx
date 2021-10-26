import { createTheme, Theme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import { useEffect, useState } from "react";
import { palette } from "./palette";
import { themeOptions } from "./themeOptions";
import { useUserPreferDarkMode } from "./useUserPreferDarkMode";

const lightTheme = createTheme(deepmerge(palette.light, themeOptions));
const darkTheme = createTheme(deepmerge(palette.dark, themeOptions));

// use to change theme based on user preference in Browser/OS as well as app level
// App level preference will overwrite Browser/OS preference

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
