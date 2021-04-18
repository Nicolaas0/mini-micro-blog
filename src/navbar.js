import React from 'react';
import './App.css';

const Navbar = () => {
    return (
        <div>
            <div className='logo'><h2>Blog</h2></div>
            <div id='search'><input type="text" placeholder='Search' /></div>
            <div id='selection'>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </div>
    );
}
 
export default Navbar;