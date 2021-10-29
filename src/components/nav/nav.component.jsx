import React from "react";
import { NavLink } from "react-router-dom";

import "./nav.styles.scss";

const Nav = ({ currentUser }) => {
  return (
    <div className="nav-bar-container">
      <nav id="nav-bar">
        <div id="logo-container">
          <NavLink to="/">
            <h1 id="logo">CB</h1>
          </NavLink>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <NavLink exact activeClassName="active-link" to="/">
                Home
              </NavLink>
            </li>
            {currentUser ? <LoggedInLinks /> : <LoggedOutLinks />}
            <li>
              <NavLink activeClassName="active-link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: "https://manuelc.me",
                }}
                target="_blank"
              >
                gotMilk?
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const LoggedInLinks = () => {
  return (
    <>
      <li>
        <NavLink activeClassName="active-link" to="/create">
          Create
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active-link" to="/logout">
          Log Out
        </NavLink>
      </li>
    </>
  );
};

const LoggedOutLinks = () => {
  return (
    <>
      <li>
        <NavLink activeClassName="active-link" to="/signin">
          Sign In
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active-link" to="/signup">
          Sign Up
        </NavLink>
      </li>
    </>
  );
};

export default Nav;
