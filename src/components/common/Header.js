import React from "react";
import { NavLink } from "react-router-dom";

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