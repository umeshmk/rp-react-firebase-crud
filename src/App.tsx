import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import "./app.css";
import { DarkModeSwitch, Nav } from "./components/nav";
import { User } from "./components/users";
import { Pages } from "./pages";
import { useTheme } from "./theme";

function App() {
  let { theme, isDarkTheme, toggleTheme } = useTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Nav
            darkModeSwitch={
              <DarkModeSwitch
                isDarkTheme={isDarkTheme}
                toggleTheme={toggleTheme}
              />
            }
          />
          <Pages />
          <Box p={2}>{/* <User /> */}</Box>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
