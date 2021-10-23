import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";

interface IProps {
  darkModeSwitch: JSX.Element;
}

const links = (
  <ButtonGroup variant="text" color="secondary">
    <Button href="/">Home</Button>
    <Button href="/create">Create Post</Button>
  </ButtonGroup>
);

export function Nav({ darkModeSwitch }: IProps) {
  return (
    <nav>
      <Grid container justifyContent="space-between" p={5}>
        <Grid item xs={8}>
          <Typography variant="h2" color="primary">
            React Query CRUD
          </Typography>
        </Grid>

        <Grid
          item
          container
          xs={12}
          md={3}
          textAlign="right"
          justifyContent="end"
          alignItems="center"
          // spacing={3}
        >
          <Box display="inline-block" pr={3}>
            {links}
          </Box>
          {/* {links} */}
          {/* <ul>
            <li>
              <Link to="/">/</Link>
            </li>
            <li>
              <Link to="/random">Random</Link>
            </li>
          </ul> */}
          {/* <Grid item xs={1} textAlign="right">
        </Grid> */}
          {darkModeSwitch}
        </Grid>
        <Grid item xs={12} fontStyle="italic">
          <Typography variant="body2" color="text.primary">
            With Light & Dark Mode
          </Typography>
          <Typography variant="body2" color="text.primary">
            With Firebase
          </Typography>
          <Typography variant="body2" color="text.primary">
            With Material UI
          </Typography>
        </Grid>
      </Grid>
    </nav>
  );
}
