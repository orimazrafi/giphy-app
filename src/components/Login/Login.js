import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Login = () => {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const submit = () => {
    history.push("/home-page");
  };
  return (
    <Container fluid>
      <Form>
        <Row>
          <Col xs={4}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                type="text"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials((pre) => ({
                    ...pre,
                    [e.target.name]: e.target.value,
                  }))
                }
                placeholder="Enter username..."
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials((pre) => ({
                    ...pre,
                    [e.target.name]: e.target.value,
                  }))
                }
                placeholder="Enter Password..."
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" type="submit" onClick={submit}>
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Login;
