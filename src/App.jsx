import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Login from './components/Login'
import Home from './components/Home'

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <NavBar />
            <div className='max-w-full h-screen'>
              <Home /> 
            </div>
          </>
        }
      />
      <Route
        path='/landing'
        element={
          <>
            <NavBar />
            <div className='max-w-7xl mx-auto pt-20 px-6'>
              <HeroSection />
              <FeatureSection />
              <Workflow />
              <Pricing />
              <Testimonials />
              <Footer />
            </div>
          </>
        }
      />

      <Route
        path='/login'
        element={
          <div className="text-xl h-[100vh] flex justify-center items-center bg-cover">
            <Login />
          </div>
        }
      />

    </Routes>
  )
}

export default App