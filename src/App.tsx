import "./app.css";
import { Container, CssBaseline, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { useTheme } from "./theme";
import { User } from "./components/users";
import { Nav, DarkModeSwitch } from "./components/nav";

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
        <Container maxWidth="lg">
          <User />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
