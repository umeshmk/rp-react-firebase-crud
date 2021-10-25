import { Grid, Typography } from "@mui/material";
import { CurrentUser } from "./CurrentUser";

interface IProps {
  darkModeSwitch: JSX.Element;
}

export function Nav({ darkModeSwitch }: IProps) {
  return (
    <nav>
      <Grid container justifyContent="space-between" p={5}>
        <Grid item xs={8}>
          <Typography variant="h2" color="primary">
            React CRUD
          </Typography>
        </Grid>

        <Grid
          item
          container
          xs={4}
          md={3}
          textAlign="right"
          justifyContent="end"
          alignItems="center"
          // spacing={3}
        >
          <CurrentUser />

          {darkModeSwitch}
        </Grid>
        <Grid item xs={12} fontStyle="italic">
          {[
            "With Light & Dark Mode",
            "With Firebase",
            "With Material UI",
            "With Typescript",
          ].map((text) => (
            <Typography variant="body2" color="text.primary" key={text}>
              {text}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </nav>
  );
}
