import { Grid, Typography } from "@mui/material";
import { CurrentUser } from "./CurrentUser";

interface IProps {
  darkModeSwitch: JSX.Element;
}

export function Nav({ darkModeSwitch }: IProps) {
  return (
    <nav>
      <Grid container justifyContent="space-between" p={{ xs: 1, lg: 5 }}>
        <Grid item xs md={8}>
          <Typography variant="h2" color="primary">
            React CRUD
          </Typography>
        </Grid>

        <Grid
          item
          textAlign="end"
          xs
          md={3}
          alignContent="space-between"
          justifyContent="flex-end"
          pt={2}
        >
          {darkModeSwitch}
          <CurrentUser />
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
