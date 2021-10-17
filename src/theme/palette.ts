import { ThemeOptions } from "@mui/material";
import {
  blue,
  cyan,
  green,
  grey,
  pink,
  purple,
  red,
} from "@mui/material/colors";

let light: ThemeOptions = {
  palette: {
    primary: blue,
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
    primary: blue,
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
