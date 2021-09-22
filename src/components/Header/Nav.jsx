// import React from "react";
import { Link } from "react-router-dom";
const Nav = () => (
  <nav className="header-navbar-nav">
    <ul className="header-navbar-nav-ul">
      <li className="header-navbar-nav-ul-li">
        <Link className="header-navbar-nav-ul-li-a" to="/news">
          News
        </Link>
      </li>
      <li className="header-navbar-nav-ul-li">
        <Link className="header-navbar-nav-ul-li-a" to="/movies">
          Movies
        </Link>
      </li>
      <li className="header-navbar-nav-ul-li">
        <Link className="header-navbar-nav-ul-li-a" to="/sport">
          Sport
        </Link>
      </li>
      <li className="header-navbar-nav-ul-li">
        <Link className="header-navbar-nav-ul-li-a" to="/kids">
          Kids
        </Link>
      </li>
      <li className="header-navbar-nav-ul-li">
        <Link className="header-navbar-nav-ul-li-a" to="/general">
          General
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
