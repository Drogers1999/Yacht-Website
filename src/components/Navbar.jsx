import React from 'react';
import '../styles/style.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tours">Tours</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;