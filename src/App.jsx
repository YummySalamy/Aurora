import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FullLayout from './layouts/FullLayout'
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<FullLayout children={<Home/>}/>}
          />
          <Route
            path="/about"
            element={<FullLayout children={<About/>}/>}
          />
          <Route
            path="/services"
            element={<FullLayout children={<Services/>}/>}
          />
          <Route
            path="/contact"
            element={<FullLayout children={<Contact/>}/>}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
