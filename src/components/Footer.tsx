import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, Grid } from "@mui/material";

export default function Footer() {
  return (
    <footer>
      <Grid
        container
        spacing={0.5}
        py={10}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
      >
        <Grid item>
          <GitHubIcon />
        </Grid>
        <Grid item>
          <Button
            variant="text"
            href="https://github.com/umeshmk/rp-react-firebase-materialui-crud"
            color="primary"
          >
            Github
          </Button>
        </Grid>
      </Grid>
    </footer>
  );
}
