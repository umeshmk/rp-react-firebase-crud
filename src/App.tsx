import "./app.css";
import { Container, CssBaseline, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { useTheme } from "./theme";
import Posts from "./components/Posts";
import { Register, Login } from "./components/users";
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
          <Grid container justifyContent="center" my={5}>
            <Grid item xs={12} md={4}>
              <Register />
            </Grid>
            <Grid item xs={12} md={4}>
              <Login />
            </Grid>
            <Grid item xs={12} md={12}>
              <Posts />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
