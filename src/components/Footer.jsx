import React from 'react';
import '../styles/style.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; 2025 Elegant Yachting Tours. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="home.html">Home</a></li>
                    <li><a href="tours.html">Tours</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact-us.html">Contact Us</a></li>
                </ul>
                <p className="footer-social">
                    <a href="#"><i className="fab fa-facebook f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;