import "./app.css";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { useTheme, DarkModeSwitch } from "./theme";

function App() {
  let [theme, isDarkTheme, setIsDarkTheme] = useTheme();

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Grid container justifyContent="space-between" mt={2}>
            <Grid item xs={10}>
              <Typography variant="h1">Material UI is working</Typography>
            </Grid>
            <Grid item xs={2}>
              <DarkModeSwitch
                isDarkTheme={isDarkTheme}
                toggleTheme={toggleTheme}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">With Light and Dark Themes</Typography>
            </Grid>
          </Grid>
          <Button variant="contained">click</Button>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
