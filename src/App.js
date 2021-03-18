import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login/Login";
// import "./App.css";
import NotFound from "./components/NotFound/NotFound";
import HomePage from "./components/HomePage/HomePage";
import Trending from "./components/Trending/Trending";
import Search from "./components/Search/Search";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route path="/home-page" component={HomePage} />
        <Route path="/home-page/trending" component={Trending} />
        <Route exact path="/search" component={Search} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
