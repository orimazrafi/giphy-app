import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useInput } from "../../hooks";
import { Form, Container } from "react-bootstrap";
import Input from "../Input/Input";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
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
        <Input
          filter={credentials.username}
          onChange={handleChange}
          name="username"
          type="text"
          size={4}
          validation
          handleBlur={handleError}
          errors={errors}
        />
        <Input
          filter={credentials.password}
          onChange={handleChange}
          name="password"
          type="text"
          size={4}
          validation
          handleBlur={handleError}
          errors={errors}
        />
        <ButtonComponent
          name="Submit"
          submit={submit}
          size={4}
          disabled={!credentials.username || !credentials.password}
        />
      </Form>
    </Container>
  );
};

export default Login;
