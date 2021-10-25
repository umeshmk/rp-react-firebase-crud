import { Grid } from "@mui/material";
import { PostList } from "../components/posts";
import { auth } from "../firebase";
import { LoadingIcon, useTitleEffect } from "../utility";

// Home page after login
export const HomePage = () => {
  const { loginStatus } = auth.useAuthObserver();
  useTitleEffect("Home Page");

  return (
    <>
      <Grid container justifyContent="center" my={5}>
        {loginStatus === "checking" && <LoadingIcon />}

        {loginStatus === true && (
          <Grid item xs={12}>
            <PostList />
          </Grid>
        )}
      </Grid>
    </>
  );
};
