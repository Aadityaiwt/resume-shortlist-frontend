import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About';
import Features from './Pages/Features';
import Working from './Pages/Working';
const App = () => {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/working" element={<Working />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
