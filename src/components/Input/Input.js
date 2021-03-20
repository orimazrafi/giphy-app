import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { inputValidation, capitalizeFirstLetter } from "../../helpers";

const Input = ({
  value,
  onChange,
  handleBlur,
  name,
  type,
  size,
  validation = false,
  errors,
}) => {
  return (
    <Row>
      <Col xs={size}>
        <Form.Group controlId={name}>
          <Form.Label>{capitalizeFirstLetter(name)}</Form.Label>
          <Form.Control
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={`Enter ${capitalizeFirstLetter(name)}...`}
            onBlur={handleBlur}
          />
          {validation && inputValidation(errors, name, value)}
        </Form.Group>
      </Col>
    </Row>
  );
};

export default Input;
