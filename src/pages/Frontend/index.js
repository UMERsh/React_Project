import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Home from "./Home";
import About from './About';
import Contact from './Contact';
import NoPage from './NoPage';
export default function index() {
  return (

    <>
    <Header/>
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NoPage />} />
     
     </Routes>
     </main>
<Footer/>
    </>
  )
}
