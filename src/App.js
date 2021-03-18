import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
// import "./App.css";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home-page">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
