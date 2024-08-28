import { useState } from 'react';
import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Signup from './components/Signup'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router';

function App() {


  return (
    <>
    <div>
      <Navbar/>
      <div className = "mt-80">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
