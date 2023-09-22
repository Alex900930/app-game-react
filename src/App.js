import React, {Suspense} from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './components/Login'
import Layout from "./components/Layout";
import './App.css';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route path="/" element={<div className="login-background">
            <Login />
          </div>} />
          <Route path="/app" element={<Layout />} />
        </Routes>
      </Suspense>
    </Router>
  )
}
export default App
