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
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const { user, setUser, isAuthenticated, setIsAuthenticated } = useUserContext();
    const logout = useLogout()
    const navigate = useNavigate()

    useEffect(() => {
        const interceptor = axios.interceptors.response.use(
          response => response,
          error => {
            if (error.response && error.response.status === 401) {
              Swal.fire({
                icon: 'error',
                title: 'Sesión vencida',
                text: 'Tu sesión ha vencido. Por favor, inicia sesión de nuevo.',
                confirmButtonText: 'Iniciar sesión'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login');
                }
              });
              localStorage.removeItem('token')
              console.log('token invalido eliminado')
              navigate('/')
            }
            return Promise.reject(error);
          }
        );
    
        return () => {
          axios.interceptors.response.eject(interceptor);
        };
      }, [navigate]);

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

    const handleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleLogout = () => {
        Swal.fire({
          title: '¿Cerrar Sesión?',
          text: 'Confirme para cerrar su sesión',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#2563eb',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, cerrar sesión!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Cierre de Sesión exitoso',
              '',
              'success'
            )
            logout()
          } else {
            Swal.fire(
              'Puedes seguir trabajando...',
              '',
              'info'
            );
          }
        });
      }

  return (
    <nav className="sticky top-0 z-50 py-3 my-4 backdrop-blur-lg border-b border-secondary/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className='h-10 w-9 mr-2' src={logo} alt="logo" />
                    <span className="text-lg tracking-tight">Diego de Rojas</span>
                </div>
                <ul className={`hidden lg:flex ml-14 space-x-12 ${isAuthenticated ? '' : 'invisible pointer-events-none'}`}>
                    {navItems.map((item, index) => (
                        <li key={index} className='text-base hover:text-lg font-semibold hover:font-bold text-primary  hover:text-secondary duration-300'>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    {
                      isAuthenticated
                      ? <CiUser onClick={handleLogout} className='text-2xl text-secondary hover:text-red-600 hover:scale-150 hover:cursor-pointer ease-in duration-300'/>
                        : <Link to="/login" className='border border-primary w-full p-3 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300'>
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
                        ? <CiUser onClick={handleLogout} className='text-2xl text-secondary hover:text-red-600 hover:scale-150 hover:cursor-pointer ease-in duration-300'/>
                        : <Link to="/login" className='border border-primary w-full p-3 my-4 text-neutral-300 hover:text-white rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300'>
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