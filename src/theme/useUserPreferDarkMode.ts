// Types of user preferences
// 1) Browser - prefer-color-scheme
// 2) App - User clicked on DarkMode button in App
//     - values = none | dark | light
//     - Why localStorage ? - must persist on refresh
// App will veto over Browser
// return true/false if darkMode

import { useMediaQuery } from "@mui/material";

let ls = localStorage;
if (!ls.userPrefersTheme) {
  ls.setItem("userPrefersTheme", "none");
}

export function useUserPreferDarkMode() {
  const browserPrefers = useMediaQuery("(prefers-color-scheme: dark)");
  const appPrefers = ls.userPrefersTheme;
  let userPrefersDark;

  if (appPrefers === "none") {
    userPrefersDark = browserPrefers;
  } else {
    userPrefersDark = appPrefers === "dark" ? true : false;
  }

  const toggleUserPrefers = () => {
    if (appPrefers === "dark") ls.userPrefersTheme = "light";
    else ls.userPrefersTheme = "dark";
  };

  return { userPrefersDark, toggleUserPrefers } as const;
}
