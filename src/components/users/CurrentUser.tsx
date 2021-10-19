import { Box, Typography } from "@mui/material";
import { CurrentUserType, LoginStatus } from "../../types";
import { Logout } from "./Logout";

interface IProps {
  currentUser: CurrentUserType;
  loginStatus: LoginStatus;
}

export function CurrentUser({ currentUser, loginStatus }: IProps) {
  return (
    <Box display="inline-block">
      {loginStatus === true && (
        <Box>
          <Typography variant="h6" fontFamily="monospace" color="primary">
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
