import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png';
import Logo1 from './logo1.png';
import {useState, useEffect} from "react";
import './Navbar.css';
import '../../../../css/AppDarkTheme.css';
import '../../../../css/AppLightTheme.css';

const Navbar = ({darkTheme, toggleTheme}) => {
  const [changeLogo, setChangeLogo] = useState(false);

  useEffect(() => {
    setChangeLogo(!darkTheme);
  }, [darkTheme]);

  return (
    <nav className={`navbar ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
      <img src={changeLogo ? Logo1 : Logo} alt="logo" className="logo"/>
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
      <div className="icon-container" onClick={toggleTheme}>
        <i className={`bi ${darkTheme ? 'bi-moon-fill' : 'bi-sun-fill'} custom-icon`}></i>
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
