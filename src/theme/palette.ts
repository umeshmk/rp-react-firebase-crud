import { ThemeOptions } from "@mui/material";
import { cyan, green, grey, pink, purple, red } from "@mui/material/colors";

let light: ThemeOptions = {
  palette: {
    primary: pink,
    secondary: cyan,
    divider: purple[200],
    text: {
      primary: grey[900],
      secondary: grey[600],
    },
  },
};

let dark: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: pink,
    secondary: cyan,
    divider: grey[700],
    background: {
      default: grey[900],
      paper: grey[900],
    },
    text: {
      primary: grey[200],
      secondary: grey[500],
    },
  },
};

export const palette = { light, dark };
