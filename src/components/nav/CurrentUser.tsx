import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, Drawer, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

export function CurrentUser() {
  const { currentUser, loginStatus } = auth.useAuthObserver();
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);

  if (loginStatus !== true) return null;

  return (
    <>
      <AccountCircleIcon
        fontSize={"large"}
        onClick={toggleDrawer}
        sx={{
          cursor: "pointer",
          "&:hover": {
            fill: (theme) => theme.palette.primary.main,
          },
        }}
      />
      <Drawer anchor="top" open={open} onClose={() => toggleDrawer()}>
        <Grid
          container
          direction="column"
          alignContent="center"
          alignItems="center"
          p={5}
          spacing={3}
          sx={{
            backgroundColor: "background.default",
          }}
        >
          {/* <Grid item></Grid> */}
          <Grid item justifyContent="center" textAlign="center">
            <AccountCircleIcon fontSize={"large"} />
            <Typography
              variant="subtitle1"
              color="secondary"
              fontFamily="monospace"
            >
              {currentUser?.email} {/* {currentUser?.email} */}
            </Typography>
          </Grid>
          <Grid item>
            <Button component={Link} to="/logout" onClick={toggleDrawer}>
              Logout
            </Button>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
}
