// import React from "react";
import { Link } from "react-router-dom";
const Nav = () => (
    <nav>
      <ul>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/sport">Sport</Link>
        </li>
        <li>
          <Link to="/kids">Kids</Link>
        </li>
        <li>
          <Link to="/music">Music</Link>
        </li>
      </ul>
    </nav>
);

export default Nav;
