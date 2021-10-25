import { Redirect, Route, Switch } from "react-router-dom";
import { auth } from "../firebase";
import { LoadingIcon } from "../utility";
import { CreatePage } from "./CreatePage";
import { EditPage } from "./EditPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { LogoutPage } from "./LogoutPage";

export const Pages = () => {
  const { loginStatus } = auth.useAuthObserver();
  const loggedIn = loginStatus === true;

  if (loginStatus === "checking") return <LoadingIcon />;

  return (
    <>
      <Switch>
        <Route exact path="/login">
          {!loggedIn ? <LoginPage option="login" /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/register">
          {!loggedIn ? <LoginPage option="register" /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/logout">
          <LogoutPage />
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
