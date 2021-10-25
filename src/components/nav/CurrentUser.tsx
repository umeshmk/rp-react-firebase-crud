import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

export function CurrentUser() {
  const { currentUser, loginStatus } = auth.useAuthObserver();
  return (
    <>
      {loginStatus === true && (
        <Box display="inline-block" pr={3}>
          <Typography
            variant="subtitle1"
            color="secondary"
            fontFamily="monospace"
          >
            [ {currentUser?.email} ]{/* {currentUser?.email} */}
          </Typography>
          <Button component={Link} to="/logout">
            Logout
          </Button>
        </Box>
      )}
    </>
  );
}
