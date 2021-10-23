import { ThemeOptions } from "@mui/material";
import { grey, lightBlue, pink, purple } from "@mui/material/colors";

let light: ThemeOptions = {
  palette: {
    primary: pink,
    secondary: lightBlue,
    divider: purple[200],
    background: {
      default: "#fff",
      paper: pink[50],
    },
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
    secondary: lightBlue,
    divider: grey[700],
    background: {
      default: grey[900],
      paper: grey[800],
    },
    text: {
      primary: grey[200],
      secondary: grey[500],
    },
  },
};

export const palette = { light, dark };
