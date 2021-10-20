import { Grid } from "@mui/material";
import ReactLoading from "react-loading";
import { auth } from "../../firebase";
import { Posts } from "../posts";
import { CurrentUser } from "./CurrentUser";

export function User() {
  const { currentUser, loginStatus } = auth.useAuthObserver();

  return (
    <>
      <Grid container justifyContent="center" my={5}>
        {loginStatus === "checking" && (
          <ReactLoading type="spin" color="#333" height={50} width={50} />
        )}

        {loginStatus === true && (
          <>
            <Grid item xs={12} mb={10} textAlign="center">
              <CurrentUser
                loginStatus={loginStatus}
                currentUser={currentUser}
              />
            </Grid>
            <Grid item xs={12}>
              <Posts />
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
}
