import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Route, Redirect } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import Trending from "../Trending/Trending";
import Favourites from "../Favourites/Favourites";
import Search from "../Search/Search";
import ErrorBoundryComponent from "../ErrorBoundryComponent/ErrorBoundryComponent";

const Sidebar = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/home-page/trending">Trending</Link>
            </li>
            <li>
              <Link to="/home-page/search">Search</Link>
            </li>
            <li>
              <Link to="/home-page/favourites">Favourites</Link>
            </li>
          </ul>
        </Col>
        <Col>
          <Switch>
            <Route exact path="/home-page">
              <Redirect to="/home-page/trending" />
            </Route>
            <Route path="/home-page/trending" component={Trending} />
            <Route path="/home-page/search" component={Search} />
            <Route path="/home-page/favourites" component={Favourites} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorBoundryComponent(Sidebar);
