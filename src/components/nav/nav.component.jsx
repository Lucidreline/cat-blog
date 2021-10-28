import React from "react";
import { Link } from "react-router-dom";

import "./nav.styles.scss";

const Nav = () => {
  return (
    <div className="nav-bar-container">
      <nav id="nav-bar">
        <div id="logo-container">
          <h1 id="logo">CB</h1>
        </div>
        <div className="nav-links">
          <ul>
            <li className="active-link">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: "https://manuelc.me",
                }}
                target="_blank"
              >
                gotMilk?
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
