import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import "./app.css";
import Footer from "./components/Footer";
import { DarkModeSwitch, Nav } from "./components/nav";
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
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
