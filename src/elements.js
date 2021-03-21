import styled, { css } from "styled-components";

export const GifsContainer = styled.div`
  padding: 5px;
`;

export const GifWrapper = styled.img`
  padding: 10px;
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
  display: flex;
  & > div {
    margin: auto;
  }
`;
