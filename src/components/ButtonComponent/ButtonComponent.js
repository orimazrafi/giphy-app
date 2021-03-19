import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
const ButtonComponent = ({ name, submit, size, disabled }) => {
  return (
    <Row>
      <Col xs={size}>
        <ButtonWrapper
          variant="primary"
          type="submit"
          onClick={submit}
          disabled={disabled}
        >
          {name}
        </ButtonWrapper>
      </Col>
    </Row>
  );
};

export default ButtonComponent;

const ButtonWrapper = styled(Button)`
  float: right;
`;
