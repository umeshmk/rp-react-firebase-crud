import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import "./app.css";
import { DarkModeSwitch, Nav } from "./components/nav";
import { User } from "./components/users";
import { useTheme } from "./theme";

function App() {
  let { theme, isDarkTheme, toggleTheme } = useTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav
          darkModeSwitch={
            <DarkModeSwitch
              isDarkTheme={isDarkTheme}
              toggleTheme={toggleTheme}
            />
          }
        />
        <Box p={2}>
          <User />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
