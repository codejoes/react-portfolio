import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/portfolio" activeStyle>
            Portfolio
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Me
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
