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

export const LoaderWrapper = styled.div`
  height: 60vh;
  /* width: 100vw; */
  display: flex;
  & > div {
    margin: auto;
  }
`;
