import React from "react";
import { Nav } from "react-bootstrap";
import { Link, Route, Redirect } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import Trending from "../Trending/Trending";
import Favourites from "../Favourites/Favourites";
import Search from "../Search/Search";

const Sidebar = () => {
  return (
    <>
      <Nav className="col-md-2 d-none d-md-block bg-light sidebar float-left">
        <Nav.Item>
          <Nav.Link>
            <Link to="/home-page/trending">Trending</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            <Link to="/home-page/search">Search</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">
            <Link to="/home-page/favourites">Favourites</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item></Nav.Item>
      </Nav>
      <Switch>
        <Route exact path="/home-page">
          <Redirect to="/home-page/trending" />
        </Route>
        <Route path="/home-page/trending" component={Trending} />
        <Route path="/home-page/search" component={Search} />
        <Route path="/home-page/favourites" component={Favourites} />
      </Switch>
    </>
  );
};

export default Sidebar;
