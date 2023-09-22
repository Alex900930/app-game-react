import React, {Suspense} from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useState} from "react";
import Login from './components/Login'
import Layout from "./components/Layout";
import './App.css';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme); // Cambia entre temas claro y oscuro
  };

  return (
    <Router>
      <div className={`app ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
        <button onClick={toggleTheme}>Cambiar Tema</button>
        <Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route path="/" element={<div className="login-background">
            <Login />
          </div>} />
          <Route path="/app" element={<Layout />} />
        </Routes>
      </Suspense>
     </div>
    </Router>
  )
}
export default App
