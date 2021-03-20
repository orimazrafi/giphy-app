import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
const ButtonComponent = ({
  name,
  submit,
  variant = "primary",
  disabled,
  noSpacing,
}) => {
  return (
    <ButtonWrapper
      variant={variant}
      type="submit"
      onClick={submit}
      disabled={disabled}
      nospacing={noSpacing}
    >
      {name}
    </ButtonWrapper>
  );
};

export default ButtonComponent;

const ButtonWrapper = styled(Button)`
  margin-top: ${(props) => (props.nospacing ? "0" : "2rem")};
`;
