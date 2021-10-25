import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LoginOrRegisterOption } from "../../types";
import { Login } from "./Login";
import { Register } from "./Register";

interface IProps {
  option: LoginOrRegisterOption;
}

export function LoginOrRegister({ option }: IProps) {
  const isLogin = option === "login";

  const selected = (
    <>
      {/* maybe there is a little bug in button group. It affects buttons outside too.  */}
      {/* <ButtonGroup variant="text" color="secondary"> */}
      <Button component={Link} to="/login" disabled={isLogin}>
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

      <Button component={Link} to="/register" disabled={!isLogin}>
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
          {isLogin ? <Login /> : <Register />}
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
