import React from 'react';
import {Link} from 'react-router-dom';

function NavBar () {
    // here is about page
    return (
        <nav className="navbar">
        <ul className="navbar-nav nav">
            <li className="nav-item">
            <Link to="/" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
            <Link to="/Discover" className="nav-link">Discover</Link>
            </li>
            <li className="nav-item">
            <Link to="/Search" className="nav-link">Search</Link>
            </li>
        </ul>
        </nav>
        
    )

}

export default NavBar;