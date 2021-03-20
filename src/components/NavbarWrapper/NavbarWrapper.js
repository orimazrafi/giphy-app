import React from "react";
import NavbarComponent from "../NavbarComponent/NavbarComponent";

const NavbarWrapper = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      {children}
    </>
  );
};
export default NavbarWrapper;
