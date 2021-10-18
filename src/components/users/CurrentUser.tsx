import { Box, Typography } from "@mui/material";
import { CurrentUserType, LoginStatus } from "../../types";
import ReactLoading from "react-loading";
import { Logout } from "./Logout";

interface IProps {
  currentUser: CurrentUserType;
  loginStatus: LoginStatus;
}

export function CurrentUser({ currentUser, loginStatus }: IProps) {
  let loading = (
    <ReactLoading type="spin" color="#333" height={50} width={50} />
  );

  return (
    <Box display="inline-block">
      <Typography variant="h5" color="secondary">
        {loginStatus && currentUser?.email}

        {loginStatus === "checking" && loading}
      </Typography>
      <Box mt={3}>{loginStatus === true && <Logout />}</Box>
    </Box>
  );
}
