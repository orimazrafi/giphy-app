import React from "react";
import { Navbar, Row, Col, Container, Image } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import styled, { css } from "styled-components";

const NavbarComponent = () => {
  const { logout, loginWithRedirect, user } = useAuth0();
  const storageUser = localStorage.getItem("user");
  const username = JSON.parse(storageUser);
  const activeUser = username || user;

  const submit = () => {
    logout({ returnTo: window.location.origin });
    localStorage.removeItem("user");
  };

  return (
    <NavbarWrapper bg="dark" variant="dark">
      <Container fluid>
        <Col xs={12}>
          {activeUser ? (
            <Row>
              <Col>
                <LinkWrapper noalign={"true"}>
                  {activeUser?.given_name}
                </LinkWrapper>
              </Col>
              <Col>
                <LinkWrapper>
                  <Image
                    src={activeUser?.picture}
                    alt={activeUser?.given_name}
                    roundedCircle
                    className="profile--image"
                  />
                  <span onClick={submit}>Log out</span>
                </LinkWrapper>
              </Col>
            </Row>
          ) : (
            <LinkWrapper onClick={loginWithRedirect}>Log in</LinkWrapper>
          )}
        </Col>
      </Container>
    </NavbarWrapper>
  );
};
export default NavbarComponent;

const NavbarWrapper = styled(Navbar)`
  height: 56px;
`;

const LinkWrapper = styled.div`
  color: white;
  white-space: nowrap;
  margin: auto;
  ${(props) =>
    props.noalign
      ? css`
          text-align: left;
          margin-top: 10px;
        `
      : css`
          text-align: right;
        `}

  &:hover {
    cursor: pointer;
  }
  > span {
    margin-left: 10px;
  }
  > img.profile--image {
    height: 40px;
  }
`;
