import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useInput } from "../../hooks";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../Input/Input";

const Login = () => {
  const history = useHistory();
  useEffect(() => {});
  const [credentials, handleChange] = useInput({
    username: "",
    password: "",
  });

  const [errors, handleError] = useInput();
  const submit = (e) => {
    e.preventDefault();
    history.push("/home-page");
  };

  return (
    <Container fluid>
      <Form>
        <Row>
          <Col xs={4}>
            <Input
              filter={credentials.username}
              onChange={handleChange}
              name="username"
              type="text"
              validation
              handleBlur={handleError}
              errors={errors}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Input
              filter={credentials.password}
              onChange={handleChange}
              name="password"
              type="text"
              validation
              handleBlur={handleError}
              errors={errors}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="primary"
              type="submit"
              onClick={submit}
              disabled={!credentials.username || !credentials.password}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Login;
