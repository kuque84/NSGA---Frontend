import React, { useContext } from 'react';
import {Menu, X} from 'lucide-react'
import { useState } from 'react'
import logo from '../img/logo.png'
import { navItems } from '../constants'
import { Link } from 'react-router-dom'
import { useUserContext } from '../context/userContext';
import { CiUser } from "react-icons/ci";
import { useLogout } from '../functions/logout.function';
import { useEffect } from 'react';
import { CiLogout } from "react-icons/ci";
import { useVerifyToken } from "../functions/verifyToken.function";
import swal from 'sweetalert';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { user, setUser, isAuthenticated, setIsAuthenticated } = useUserContext();
    const logout = useLogout()
  
    useEffect(() => {
      if (localStorage.getItem('token') === null) {
        return
      }
      const handleVerifyToken = async () => {
        
            const {data, Authenticated} = await useVerifyToken(localStorage.getItem('token'))
            //console.log("data: ", data)
            if (Authenticated === true) {
                setUser(data)
                setIsAuthenticated(Authenticated)
                //console.log("Usuario autenticado desde verificacion de token")
            }
        }
        handleVerifyToken()
    }, []);

    useEffect(() => {
        console.log('user en context:',user);
      }, [user]);

    const handleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleLogout = () => {
        swal({
            title: "¿Cerrar Sesión?",
            text: "Confirme para cerrar su sesión",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((logingout) => {
            if (logingout) {
              swal("Cierre de Sesión exitoso",
                {
                    icon: "success",
                }
              );
                //console.log("Logout")
                logout()
                // redirigir a la página de inicio
            } else {
              swal("Puedes seguir trabajando..."),
              {
                  icon: "info",
              };
            }
          });   

    }

  return (
    <nav className="sticky top-0 z-50 py-3 my-4 backdrop-blur-lg border-b border-neutral-700/80">
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
                        ? <CiUser onClick={handleLogout} className='text-3xl text-blue-800 hover:text-red-600 hover:scale-150 hover:cursor-pointer ease-in duration-300'/> 
                        : <Link to="/login" className='border border-cyan-500 w-full p-3 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-800 ease-in duration-300'>
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
                        ? <CiUser onClick={handleLogout} className='text-3xl text-blue-800 hover:text-red-600 hover:scale-150 hover:cursor-pointer ease-in duration-300'/>
                        : <Link to="/login" className='border border-cyan-500 w-full p-3 my-4 text-neutral-300 hover:text-white rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-800 ease-in duration-300'>
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