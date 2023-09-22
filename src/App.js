import React, {Suspense} from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './components/Login'

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  )
}
export default App
