import styled, { css } from "styled-components";

export const GifWrapper = styled.img`
  &:hover {
    ${(props) =>
      props.disabled
        ? css`
            cursor: pointer;
            transform: scale(1.1);
          `
        : css`
            cursor: not-allowed;
          `}
  }
`;
