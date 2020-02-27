import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/NavBar.scss";

export default function NavBar() {
  return (
    <div>
      <NavLink to="/" exact={true}>
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/discover">Movies</NavLink>
    </div>
  );
}
