import React from 'react'
import Navbar from "./components/Navbar";
import '../../css/AppLightTheme.css';
import '../../css/AppDarkTheme.css';
import Card from "./components/Card/Card";

const Layout = ({ darkTheme }) => {
  return (
    <div className={`layout-container ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
    <Navbar darkTheme={darkTheme} />
    <div className="conatiner">
      <Card />
    </div>

    </div>
  )
}
export default Layout
