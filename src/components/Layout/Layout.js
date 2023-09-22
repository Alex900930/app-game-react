import React from 'react'
import Navbar from "./components/Navbar";
import '../../css/AppLightTheme.css';
import '../../css/AppDarkTheme.css';

const Layout = ({ darkTheme }) => {
  return (
    <div className={`layout-container ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
    <Navbar darkTheme={darkTheme} />
    <div>Hola Layout</div>
    </div>
  )
}
export default Layout
