import React from "react";
import {NavLink} from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <a className="navbar-brand" href="/">
        Melody
      </a>
      <NavLink to={`/signup`} activeClassName="active">Signup</NavLink>
    </nav>
  );
}

export default Nav;
