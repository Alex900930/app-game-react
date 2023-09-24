import React, {Suspense} from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useState} from "react";
import Login from './components/Login'
import Layout from "./components/Layout";
import './App.css';
import './css/AppDarkTheme.css';
import './css/AppLightTheme.css';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);


  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    const iconElement = document.querySelector('.custom-icon');
    if (darkTheme) {
      iconElement.classList.remove('bi-sun-fill');
      iconElement.classList.add('bi-moon-fill');
    } else {
      iconElement.classList.remove('bi-moon-fill');
      iconElement.classList.add('bi-sun-fill');
    }
  };

  return (
    <Router>
        <Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route path="/" element={<div className={`login-background ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
            <Login />
          </div>} />
          <Route path="/app" element={<Layout darkTheme={darkTheme} toggleTheme={toggleTheme} />} />
        </Routes>
      </Suspense>
    </Router>
  )
}
export default App
