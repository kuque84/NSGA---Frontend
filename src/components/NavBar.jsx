import React, { useContext } from 'react';
import {LogOut, Menu, X} from 'lucide-react'
import { useState } from 'react'
import logo from '../img/logo.png'
import { navItems } from '../constants'
import { Link } from 'react-router-dom'
import { useUserContext } from '../context/userContext';
import { CiUser } from "react-icons/ci";
import { useLogout } from '../functions/logout.function';
import { useEffect } from 'react';


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { user, setUser, isAuthenticated, setIsAuthenticated } = useUserContext();
    const logout = useLogout()
  
    useEffect(() => {
      if (localStorage.getItem('user') === null || localStorage.getItem('isAuthenticated') === null) {
        return
      }
      setUser(localStorage.getItem('user'))
      setIsAuthenticated(localStorage.getItem('isAuthenticated'))
      console.log("NavBar.jsx User ", localStorage.getItem('user'), " Autenticado: " ,localStorage.getItem('isAuthenticated'));
    }, []);

    const handleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleLogout = () => {
        console.log("Logout")
        logout()
        // redirigir a la página de inicio
        window.location.href = '/'        
    }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className='h-10 w-9 mr-2' src={logo} alt="logo" />
                    <span className="text-xl tracking-tight">Diego de Rojas</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    {
                        isAuthenticated
                        ? <CiUser onClick={handleLogout} className='text-2xl text-blue-800 '/>
                        : <Link to="/login" className='bg-gradient-to-r from-cyan-500 to-blue-800 py-2 px-3 rounded-md'>
                            Inciar Sesión
                        </Link>
                    }
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={handleMenu}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden text-white'>
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className='py-4'>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className='flex justify-center space-x-12 items-center'>
                    {
                        isAuthenticated
                        ? <CiUser onClick={handleLogout} className='text-2xl text-blue-800 '/>
                        : <Link to="/login" className='bg-gradient-to-r from-cyan-500 to-blue-800 py-2 px-3 rounded-md'>
                            Inciar Sesión
                        </Link>
                    }
                    </div>
                </div>
                )}
        </div>
    </nav>
  )
}

export default NavBar