import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import NotFound from "./components/NotFound/NotFound";
import HomePage from "./components/HomePage/HomePage";
import LoadingComponent from "./components/LoadingComponent/LoadingComponent";
import Welcome from "./components/Welcome/Welcome";
function App() {
  const { isLoading, user, error } = useAuth0();
  if (isLoading) {
    return <LoadingComponent />;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (user) localStorage.setItem("user", JSON.stringify(user));
  const storageUser = localStorage.getItem("user");

  if (storageUser) {
    return (
      <Switch>
        <Route exact path="/">
          <Redirect to="/home-page" />
        </Route>
        <Route path="/home-page" component={HomePage} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/welcome" />
      </Route>
      <Route path="/welcome" component={Welcome} />
      <Route path="*" exact component={NotFound} />
    </Switch>
  );
}

export default App;
