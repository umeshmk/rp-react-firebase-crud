import "./app.css";
import { Container, CssBaseline, Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { useTheme, DarkModeSwitch } from "./theme";
import Posts from "./components/Posts";

function App() {
  let [theme, isDarkTheme, setIsDarkTheme] = useTheme();

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <>
          <Grid container justifyContent="space-between" p={5}>
            <Grid item xs={10}>
              <Typography variant="h2">React Query CRUD</Typography>
            </Grid>
            <Grid item container xs={2} justifyContent="end">
              <DarkModeSwitch
                isDarkTheme={isDarkTheme}
                toggleTheme={toggleTheme}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" color="primary.dark">
                With Light & Dark Mode
              </Typography>
              <Typography variant="subtitle1" color="primary.dark">
                With Firebase
              </Typography>
              <Typography variant="subtitle1" color="primary.dark">
                With Material UI
              </Typography>
            </Grid>
          </Grid>
        </>
        <Container maxWidth="lg">
          <Posts />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
