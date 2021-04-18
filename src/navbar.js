import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>Blog</h2>
      </div>
      <div id="selection">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div id="search">
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};

export default Navbar;
