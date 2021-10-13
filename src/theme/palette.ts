import { ThemeOptions } from "@mui/material";
import { grey, purple } from "@mui/material/colors";

let light: ThemeOptions = {
  palette: {
    primary: purple,
    divider: purple[200],
    text: {
      primary: grey[900],
      secondary: grey[800],
    },
  },
};

let dark: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: grey,
    divider: grey[700],
    background: {
      default: grey[900],
      paper: grey[900],
    },
    text: {
      primary: "#fff",
      secondary: grey[500],
    },
  },
};

export const palette = { light, dark };
