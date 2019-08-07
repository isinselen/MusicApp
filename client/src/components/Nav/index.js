import React from "react";
import {NavLink} from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-danger">
      <a className="navbar-brand" href="/">
        Melody
      </a>
      <NavLink to={`/signup`} className= "sign-up" activeClassName="active">Sign up</NavLink>

      <NavLink to={`/questions`} className= "start-trivia" activeClassName="active">Start Trivia</NavLink>
    </nav>
  );
}

export default Nav;
