import { Grid } from "@mui/material";
import ReactLoading from "react-loading";
import { Redirect, Route, Switch } from "react-router-dom";
import { auth } from "../firebase";
import { CreatePage } from "./CreatePage";
import { EditPage } from "./EditPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";

export const Pages = () => {
  const { currentUser, loginStatus } = auth.useAuthObserver();
  const loggedIn = loginStatus === true;

  const loading = loginStatus === "checking" && (
    <Grid
      container
      direction="column"
      spacing={5}
      justifyContent="center"
      alignContent="center"
      height="500px"
    >
      <Grid item>
        <ReactLoading type="spin" color="#333" height={50} width={50} />
      </Grid>
    </Grid>
  );

  if (loading) return loading;

  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">/</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/edit">Edit</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/404">404 error</Link>
          </li>
          <li>
            <Link to="/random">Random</Link>
          </li>
        </ul>
      </nav> */}

      <Switch>
        <Route exact path="/login">
          {!loggedIn ? <LoginPage /> : <Redirect to="/" />}
        </Route>

        {!loggedIn && <Redirect to="/login" />}
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/create">
          <CreatePage />
        </Route>
        <Route exact path="/edit">
          <EditPage />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
};
