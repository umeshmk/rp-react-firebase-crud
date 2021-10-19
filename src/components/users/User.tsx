import { Button, ButtonGroup, Grid } from "@mui/material";
import { useState } from "react";
import ReactLoading from "react-loading";
import { auth } from "../../firebase";
import { Posts } from "../posts";
import { CurrentUser } from "./CurrentUser";
import { Login } from "./Login";
import { Register } from "./Register";

type SelectOption = "login" | "register";

export function User() {
  const { currentUser, loginStatus } = auth.useAuthObserver();
  const [loginOrRegister, setLoginOrRegister] = useState<SelectOption>("login");

  let isLoginSelected = loginOrRegister === "login";

  const selected = (
    <ButtonGroup variant="text">
      <Button
        href=""
        onClick={() => setLoginOrRegister("login")}
        disabled={isLoginSelected}
      >
        Login
      </Button>
      <Button
        href=""
        onClick={() => setLoginOrRegister("register")}
        disabled={!isLoginSelected}
      >
        Register
      </Button>
    </ButtonGroup>
  );

  return (
    <>
      <Grid container justifyContent="center" my={5}>
        {loginStatus === "checking" && (
          <ReactLoading type="spin" color="#333" height={50} width={50} />
        )}

        {!loginStatus && (
          <>
            <Grid item xs={12} textAlign="center" my={2}>
              {selected}
            </Grid>
            <Grid item xs={12} md={4}>
              {!isLoginSelected && <Register />}
              {isLoginSelected && <Login />}
            </Grid>
          </>
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
