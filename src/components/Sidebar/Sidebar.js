import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Route, Redirect } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import Trending from "../Trending/Trending";
import Favourites from "../Favourites/Favourites";
import Search from "../Search/Search";
import ErrorBoundryComponent from "../ErrorBoundryComponent/ErrorBoundryComponent";
import styled from "styled-components";
import { SIDEBAR_ACTIVE } from "../../constants";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(SIDEBAR_ACTIVE);
  const handleClick = (title) => {
    setActiveLink({
      SIDEBAR_ACTIVE,
      [title]: true,
    });
  };

  return (
    <Container fluid>
      <Row>
        <ColWrapper xs={2}>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li onClick={() => handleClick("Trending")}>
              <LinkWrapper to="/home-page/trending">
                <h5
                  className={activeLink["Trending"] === true ? " active" : ""}
                >
                  Trending
                </h5>
              </LinkWrapper>
            </li>
            <li onClick={() => handleClick("Search")}>
              <LinkWrapper to="/home-page/search">
                <h5 className={activeLink["Search"] === true ? " active" : ""}>
                  Search
                </h5>
              </LinkWrapper>
            </li>
            <li onClick={() => handleClick("Favourites")}>
              <LinkWrapper to="/home-page/favourites">
                <h5
                  className={activeLink["Favourites"] === true ? " active" : ""}
                >
                  Favourites
                </h5>
              </LinkWrapper>
            </li>
          </ul>
        </ColWrapper>

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

const ColWrapper = styled(Col)`
  height: calc(100vh - 56px);
  background: #eee;
  max-width: 200px;
  padding-top: 10px;
`;

const LinkWrapper = styled(Link)`
  & > h5 {
    margin-top: 20px;
  }
  &:hover {
    text-decoration: none;
    color: #5690bd;
  }
  h5.active {
    color: #021829;
  }
`;
