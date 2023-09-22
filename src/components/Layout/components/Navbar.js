import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          Gamor
        </Link>
        <Link to="/novedades" className="navbar-link">
          Novedades
        </Link>
        <Link to="/fiesta" className="navbar-link">
          Fiesta
        </Link>
        <Link to="/profesional" className="navbar-link">
          Profesional
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/" className="navbar-link">
          Iniciar Sesión
        </Link>
        <Link to="/registro" className="navbar-link">
          Crear Cuenta
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
