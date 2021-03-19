import React from "react";
import { Form } from "react-bootstrap";
import { inputValidation, capitalizeFirstLetter } from "../../helpers";

const Input = ({
  value,
  onChange,
  handleBlur,
  name,
  type,
  validation = false,
  errors,
}) => {
  return (
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
  );
};

export default Input;
