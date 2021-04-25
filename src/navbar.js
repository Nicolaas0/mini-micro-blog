import React from "react";
import {Link} from 'react-router-dom';
import "./index.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>Blog</h2>
      </div>
      <div id="selection">
        <Link to='/'>Home</Link>
        <Link to='/create'>Create</Link>
        <Link to='/'>Contact</Link>
      </div>
      <div id="search">
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Navbar;
