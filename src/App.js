import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login/Login";
// import "./App.css";
import Search from "./components/Search/Search";
import NotFound from "./components/NotFound/NotFound";
import Favourites from "./components/Favourites/Favourites";
import Trending from "./components/Trending/Trending";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/favourites" component={Favourites} />
        <Route exact path="/tranding" component={Trending} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
