import React from "react";
import { Form } from "react-bootstrap";

const Input = ({ title, filter, onChange, name, type, placeholder }) => {
  return (
    <Form.Group controlId={name}>
      <Form.Label>{title}</Form.Label>
      <Form.Control
        name={name}
        type={type}
        value={filter}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Form.Group>
  );
};

export default Input;
