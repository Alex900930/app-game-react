import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '../../../css/AppDarkTheme.css';
import '../../../css/AppLightTheme.css';

const Navbar = ({ darkTheme }) => {
  return (
    <nav className={`navbar ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
      <div className="navbar-left">
        <Link to="/app" className="navbar-brand">
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
