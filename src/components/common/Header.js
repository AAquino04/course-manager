import React from "react";
import { NavLink } from "react-router-dom";
// Navlinks are required to use react-router navigation and are rendered as <a>

const activeStyle = { color: "#F15B2A" }

const Header = () => {

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>{" | "}
      <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>{" | "}
      <NavLink to="/courses" activeStyle={activeStyle}>Courses</NavLink>
    </nav>
  )
}

export default Header;