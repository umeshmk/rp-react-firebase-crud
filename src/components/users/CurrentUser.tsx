import { Box, Typography } from "@mui/material";
import { CurrentUserType, LoginStatus } from "../../types";
import { Logout } from "./Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface IProps {
  currentUser: CurrentUserType;
  loginStatus: LoginStatus;
}

export function CurrentUser({ currentUser, loginStatus }: IProps) {
  return (
    <Box
      p={8}
      sx={{
        backgroundColor: "background.paper",
      }}
    >
      {loginStatus === true && (
        <Box display="inline-block">
          <AccountCircleIcon fontSize="large" />
          <Typography variant="h6" fontFamily="monospace" color="secondary">
            [ {currentUser?.email} ]
          </Typography>
          <Box mt={3}>
            <Logout />
          </Box>
        </Box>
      )}
    </Box>
  );
}
