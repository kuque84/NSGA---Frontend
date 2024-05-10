import React, { useEffect } from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Login from './components/Login'
import Home from './components/Home'
import { useUserContext } from "./context/userContext";
import Alumnos from './components/Alumnos'


const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Landing />
            <FeatureSection />
            <Workflow />
            <Pricing />
            <Testimonials />
          </>
        }/>
        <Route path="login" element={
          <div className="text-xl h-[80vh] flex justify-center items-center bg-cover">
            <Login />
          </div>
        }/>
        <Route path="home" element={
          <div className="text-xl h-[80vh] flex justify-center items-center bg-cover">
            <Home />
          </div>
        }/>
        <Route path="alumnos" element={
          <div className="text-xl h-[80vh] flex justify-center items-start bg-cover">
            <Alumnos />
          </div>
        }/>
        <Route 
          path="*" 
          element={<div>404 - Pagina no encontrada</div>}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App