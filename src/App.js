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
  };

  return (
    <Router>
        <Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route path="/" element={<div className={`login-background ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
            <Login />
          </div>} />
          <Route path="/app" element={<Layout darkTheme={darkTheme} />} />
        </Routes>
      </Suspense>
      <button onClick={toggleTheme}>Cambiar Tema</button>
    </Router>
  )
}
export default App
