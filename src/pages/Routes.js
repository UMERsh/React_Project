import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Frontend from './Frontend'
import Auth from "./Auth"
import Dashboard from './Dashboard/Dashboard'
import Products from './Products'
export default function Index() {
  return (
      
    <>
        <Header />
        <BrowserRouter>
      
          <Routes>
            <Route path='/*' element={<Frontend />} />
            <Route path='/auth/*' element={<Auth />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/products/*' element={<Products />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </>
      

  )
}
