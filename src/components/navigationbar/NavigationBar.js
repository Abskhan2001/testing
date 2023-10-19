import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './navigationbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

function NavigationBar() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const phoneNumber = '+971524484031';
  const message = encodeURIComponent("Hello! I'm interested in your services.");
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  return (
    <nav className="navigation-bar">
      <div className="container">
        <a className="whatsapp-link" href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="whatsapp-icon" />
        </a>
        <a className="phone-link" href={`tel:${phoneNumber}`}>
          <FaPhone className="phone-icon" />
        </a>
      </div>
      <h1 className="logo">
        Mumtaz Movers <FontAwesomeIcon icon={faTruckFast} />
      </h1>
      {menuVisible ? (
        <FaTimes className="menu-icon" onClick={toggleMenu} />
      ) : (
        <FaBars className="menu-icon" onClick={toggleMenu} />
      )}
      <ul className={`nav-links ${menuVisible ? 'active' : ''}`}>
        <li>
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/service" className="nav-link" onClick={closeMenu}>
            Our Services
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link" onClick={closeMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
      <meta name="description" content="Mumtaz Movers - Your Reliable Moving Service Provider in the UAE. Contact us for professional moving, packing, and unpacking services." />
      <meta name="keywords" content="Mumtaz Movers, moving services, packing, unpacking, relocation, UAE movers, professional movers" />
    </nav>
  );
}

export default NavigationBar;
