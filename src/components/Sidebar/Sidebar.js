import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import Trending from "../Trending/Trending";
import Favourites from "../Favourites/Favourites";
import Search from "../Search/Search";
import ErrorBoundryComponent from "../ErrorBoundryComponent/ErrorBoundryComponent";
import styled from "styled-components";
import { SIDEBAR_ACTIVE, TRANDEING, SEARCH, FAVOURITES } from "../../constants";
import LinkWrapper from "../LinkWrapper/LinkWrapper";

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
          <ul className="home--page--links--wrapper">
            {[TRANDEING, SEARCH, FAVOURITES].map((link) => (
              <LinkWrapper
                key={Math.random()}
                title={link}
                handleClick={handleClick}
                activeLink={activeLink}
              />
            ))}
          </ul>
        </ColWrapper>
        <Col>
          <Switch>
            <RoutesWrapper>
              <Route exact path="/home-page">
                <Redirect to="/home-page/trending" />
              </Route>
              <Route path="/home-page/trending" component={Trending} />
              <Route path="/home-page/search" component={Search} />
              <Route path="/home-page/favourites" component={Favourites} />
            </RoutesWrapper>
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
  & > ul.home--page--links--wrapper {
    list-style-type: none;
    padding: 0;
  }
`;

const RoutesWrapper = styled.div`
  margin-top: 30px;
`;
