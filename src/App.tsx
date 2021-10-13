import { Button, Container, CssBaseline, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { useTheme } from "./theme";

function App() {
  let [theme, isDarkTheme, setIsDarkTheme] = useTheme();

  function handleClick() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <Typography variant="h1">Material UI is working</Typography>
          <Button variant="contained" onClick={handleClick}>
            {isDarkTheme ? "Light" : "Dark"} Mode
          </Button>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
