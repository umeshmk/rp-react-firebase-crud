import { Button, ButtonGroup, Grid } from "@mui/material";
import { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";

type SelectOption = "login" | "register";

export function LoginOrRegister() {
  const [loginOrRegister, setLoginOrRegister] = useState<SelectOption>("login");

  const isLoginSelected = loginOrRegister === "login";

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
      <Grid container justifyContent="center">
        <Grid item xs={12} textAlign="center" my={2}>
          {selected}
        </Grid>
        <Grid item xs={12} md={4}>
          {isLoginSelected ? <Login /> : <Register />}
        </Grid>
      </Grid>
    </>
  );
}
