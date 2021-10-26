import { Redirect, Route, Switch } from "react-router-dom";
import { auth } from "../firebase";
import { LoadingIcon } from "../utility";
import { HomePage } from "./HomePage";
import { LoginOrRegisterPage } from "./LoginOrRegisterPage";
import { LogoutPage } from "./LogoutPage";

// all pages routes
// Access specific routes only if authenticated or Not authenticated

export const Pages = () => {
  const { loginStatus } = auth.useAuthObserver();
  const loggedIn = loginStatus === true;

  if (loginStatus === "checking") return <LoadingIcon />;

  return (
    <>
      <Switch>
        <Route exact path="/login">
          {!loggedIn ? (
            <LoginOrRegisterPage option="login" />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route exact path="/register">
          {!loggedIn ? (
            <LoginOrRegisterPage option="register" />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route exact path="/logout">
          <LogoutPage />
        </Route>

        {!loggedIn && <Redirect to="/login" />}

        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
};
