import React from "react";
import {Link} from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <a className="navbar-brand" href="/">
        Melody
      </a>
      <Link to={`/login`} activeClassName="active">Login</Link>
      <Link to={`/signup`} activeClassName="active">Signup</Link>
    </nav>
  );
}

export default Nav;
