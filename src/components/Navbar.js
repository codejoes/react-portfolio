import React from "react";
import { Nav, NavLink, NavMenu, Title } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Title>CodeJoes</Title>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About Me
          </NavLink>
          <NavLink to="/portfolio" activeStyle>
            Portfolio
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Me
          </NavLink>
          <NavLink to="/resume" activeStyle>
            Resume
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
