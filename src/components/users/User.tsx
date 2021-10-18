import { Button, ButtonGroup, Grid } from "@mui/material";
import Posts from "../Posts";
import { CurrentUser } from "./CurrentUser";
import { Login } from "./Login";
import { Register } from "./Register";
import { auth } from "../../firebase";
import { useState } from "react";

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
        <Grid item xs={12} my={2} textAlign="center">
          <CurrentUser loginStatus={loginStatus} currentUser={currentUser} />
        </Grid>
        <Grid item xs={12} md={12} textAlign="center" my={2}>
          {loginStatus === false && selected}
        </Grid>
        <Grid item xs={12} md={4}>
          {!loginStatus && !isLoginSelected && <Register />}
          {!loginStatus && isLoginSelected && <Login />}
        </Grid>
        <Grid item xs={12} md={12}>
          {loginStatus === true && <Posts />}
        </Grid>
      </Grid>
    </>
  );
}
