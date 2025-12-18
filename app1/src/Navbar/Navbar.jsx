import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">

        <Link className="navbar-brand fw-bold fs-2" to="/">
          START FRAMEWORK
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav fw-bold">
            <li className="nav-item me-2">
              <NavLink className="nav-link text-light" to="/about">ABOUT</NavLink>
            </li>
            <li className="nav-item me-2">
              <NavLink className="nav-link text-light" to="/portfolio">PORTFOLIO</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}
