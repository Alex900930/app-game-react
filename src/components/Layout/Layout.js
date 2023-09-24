import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import '../../css/AppLightTheme.css';
import '../../css/AppDarkTheme.css';
import Card from "./components/Card/Card";

const Layout = ({ darkTheme, toggleTheme }) => {
  return (
    <div className={`layout-container ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
    <Navbar darkTheme={darkTheme} toggleTheme={toggleTheme}/>
      <Card />
    </div>
  )
}
export default Layout
