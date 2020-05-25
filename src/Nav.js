import React from 'react';
import './App.css'; 
import {Link} from 'react-router-dom';

function Nav() {

    const navStyle={
        color: 'white'
    };

    return (
    <div className="Nav">
        <h1>Logo</h1>
        <ul className="nav-links">
            <Link style={navStyle} to="/about">
            <li>About</li>
            </Link>
            <Link style={navStyle} to="/recipes">
            <li>Recipes</li>
            </Link>
        </ul>
    </div>
  );
}

export default Nav;
