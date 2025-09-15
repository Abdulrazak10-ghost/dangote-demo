import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Overlay */}
      <div
        className={`nav-overlay ${isOpen ? "show" : ""}`}
        onClick={closeMenu}
      ></div>

      <div className="navbar">
        <div className="navlogo">
          <h2>
            <Link to="/"><img src={Logo} alt="Logo" /></Link>
          </h2>
        </div>

        {/* Mobile Links */}
        <div className={`navlinks ${isOpen ? "show" : ""}`}>
          {/* Close button inside menu */}
          <div className="close-btn" onClick={closeMenu}>
            &times;
          </div>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
        </div>

        {/* Mobile Toggle (Hamburger) */}
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
    </>
  );
}
