import { Grid } from "@mui/material";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

interface IProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export function DarkModeSwitch({ isDarkTheme, toggleTheme }: IProps) {
  return (
    <Grid container xs={12} justifyContent="center">
      <Grid
        item
        onClick={toggleTheme}
        sx={{
          cursor: "pointer",
          "&:hover": {
            filter: "brightness(350%)",
          },
        }}
      >
        {!isDarkTheme && <Brightness3Icon fontSize="large" color="inherit" />}
        {isDarkTheme && <WbSunnyIcon fontSize="large" color="warning" />}
      </Grid>
    </Grid>
  );
}
