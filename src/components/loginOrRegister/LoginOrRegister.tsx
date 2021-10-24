import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";

type SelectOption = "login" | "register";

export function LoginOrRegister() {
  const [loginOrRegister, setLoginOrRegister] = useState<SelectOption>("login");

  const isLoginSelected = loginOrRegister === "login";

  const selected = (
    <>
      {/* maybe there is a little bug in button group. It affects buttons outside too.  */}
      {/* <ButtonGroup variant="text" color="secondary"> */}
      <Button
        // href=""
        onClick={() => setLoginOrRegister("login")}
        disabled={isLoginSelected}
      >
        Login
      </Button>

      <Box
        display="inline-block"
        fontSize="large"
        borderLeft={1}
        borderColor="text.secondary"
      >
        &nbsp;
      </Box>

      <Button
        // href=""
        onClick={() => setLoginOrRegister("register")}
        disabled={!isLoginSelected}
      >
        Register
      </Button>
      {/* </ButtonGroup> */}
    </>
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
        <Grid item xs={12} textAlign="center" p={3}>
          Guest Login
          <Typography variant="body2" color="text.secondary">
            user1@gmail.com
            <br />
            123456
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
