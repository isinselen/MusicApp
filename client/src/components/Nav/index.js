import React from "react";
import {NavLink} from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger signIn">
      <a className="navbar-brand" href="/">
        Melody
      </a>
      <NavLink to={`/signup`} className= "sign-up" activeClassName="active">Sign up</NavLink>

      <NavLink to={`/questions`} className= "start-trivia" activeClassName="active">Start Trivia</NavLink>
    </nav>
  );
}

export default Nav;
