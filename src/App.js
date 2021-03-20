import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import NotFound from "./components/NotFound/NotFound";
import HomePage from "./components/HomePage/HomePage";
import Trending from "./components/Trending/Trending";
import Search from "./components/Search/Search";
import ButtonComponent from "./components/ButtonComponent/ButtonComponent";
function App() {
  const { isLoading, user, error, loginWithRedirect } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (user) localStorage.setItem("user", JSON.stringify(user));
  const storageUser = localStorage.getItem("user");
  if (storageUser) {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home-page" />
          </Route>
          <Route path="/home-page" component={HomePage} />
          <Route path="/home-page/trending" component={Trending} />
          <Route exact path="/search" component={Search} />
          <Route path="*" exact component={NotFound} />
        </Switch>
      </>
    );
  } else {
    localStorage.removeItem("user");
    return (
      <>
        <ButtonComponent
          name="Log in"
          variant="primary"
          size={4}
          submit={loginWithRedirect}
        />
        <Switch>
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
