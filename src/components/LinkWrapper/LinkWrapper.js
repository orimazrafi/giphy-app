import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkWrapper = ({ title, handleClick, activeLink }) => {
  return (
    <li onClick={() => handleClick(title)}>
      <LinkWrap to={`/home-page/${title.toLowerCase()}`}>
        <h5 className={activeLink[title] === true ? " active" : ""}>{title}</h5>
      </LinkWrap>
    </li>
  );
};

export default LinkWrapper;
const LinkWrap = styled(Link)`
  & > h5 {
    margin-top: 20px;
  }
  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme?.hoverColor};
  }
  h5.active {
    color: ${({ theme }) => theme?.activeColor};
  }
`;
