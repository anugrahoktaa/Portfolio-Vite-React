// src/components/Navbar.jsx

import React, { useState, useEffect, useContext } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'; // Import ikon hamburger & close, FaSun, FaMoon
import { ThemeContext } from '../contexts/ThemeContext'; // Import ThemeContext
import './Navbar.css';

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false); // State untuk menu mobile
    const { theme, toggleTheme } = useContext(ThemeContext); // Get theme and toggleTheme

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <nav className={`navbar ${isSticky ? 'sticky' : ''} glass-card`}>
            <div className="container navbar-container">
                <a href="#hero" className="logo" onClick={closeMenu}>[AO]</a>

                {/* Menu untuk Desktop */}
                <ul className="nav-links desktop-menu">
                    <li><a href="#about">/about</a></li>
                    <li><a href="#projects">/projects</a></li>
                    <li><a href="#certificates">/certificates</a></li>
                    <li><a href="#contact">/contact</a></li>
                    {/* --- Tambahkan Tombol Tema --- */}
                    <li className="theme-toggle-li">
                        <button onClick={toggleTheme} className="theme-toggle-button">
                            {theme === 'light' ? <FaMoon /> : <FaSun />}
                        </button>
                    </li>
                </ul>

                {/* Ikon Hamburger untuk Mobile */}
                <div className="mobile-menu-icon" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Menu untuk Mobile (Overlay) */}
                <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-links-mobile">
                        <li><a href="#about" onClick={closeMenu}>/about</a></li>
                        <li><a href="#projects" onClick={closeMenu}>/projects</a></li>
                        <li><a href="#certificates" onClick={closeMenu}>/certificates</a></li>
                        <li><a href="#contact" onClick={closeMenu}>/contact</a></li>
                         {/* --- Tambahkan Tombol Tema di Mobile --- */}
                        <li>
                            <button onClick={() => { toggleTheme(); closeMenu(); }} className="theme-toggle-button mobile">
                                {theme === 'light' ? <FaMoon size={30}/> : <FaSun size={30} />}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;