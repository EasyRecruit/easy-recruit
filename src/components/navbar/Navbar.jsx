import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { logo } from "../../assets";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" className="logo-image mb-3" />
        </Link>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#000" }} />
          ) : (
            <FaBars size={30} style={{ color: "#000" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active mt-3" : "nav-menu mt-2"}>
          <li className="nav-item">
            <Link to="/" className="link" onClick={closeMenu}>
              <p>Home</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/platform" className="link" onClick={closeMenu}>
              <p>Platform</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/company" className="link" onClick={closeMenu}>
              <p>Company</p>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/features" className="link" onClick={closeMenu}>
              <p>Features</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing" className="link" onClick={closeMenu}>
              <p>Pricing</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resources" className="link" onClick={closeMenu}>
              <p>Resources</p>
            </Link>
          </li>

          <li className="nav-item login-left">
            <Link to="/login" className="login-btn">
              <p>Login</p>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/signup" className="btn-link">
              <button className="signup-btn">
                <h6>Sign Up For Free</h6>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
