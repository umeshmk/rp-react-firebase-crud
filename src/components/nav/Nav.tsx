import { Grid, Typography } from "@mui/material";

interface IProps {
  darkModeSwitch: JSX.Element;
}

export function Nav({ darkModeSwitch }: IProps) {
  return (
    <>
      <Grid container justifyContent="space-between" p={5}>
        <Grid item xs={10}>
          <Typography variant="h2">React Query CRUD</Typography>
        </Grid>
        <Grid item container xs={2} justifyContent="end">
          {darkModeSwitch}
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
  );
}
