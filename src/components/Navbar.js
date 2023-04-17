import React from "react";
import { Nav, NavLink, NavMenu, Title } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Title>CodeJoes</Title>
        <NavMenu>
          <NavLink to="/" activestyle="true">
            Home
          </NavLink>
          <NavLink to="/about" activestyle="true">
            About Me
          </NavLink>
          <NavLink to="/portfolio" activestyle="true">
            Portfolio
          </NavLink>
          <NavLink to="/contact" activestyle="true">
            Contact Me
          </NavLink>
          <NavLink to="/resume" activestyle="true">
            Resume
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
