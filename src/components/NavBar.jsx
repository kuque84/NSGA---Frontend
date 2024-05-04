import {Menu, X} from 'lucide-react'
import { useState } from 'react'
import logo from '../img/logo.png'
import { navItems } from '../constants'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleMenu = () => {
        console.log('click')
        setIsOpen(!isOpen)
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
                    <a href="#" className='bg-gradient-to-r from-cyan-500 to-blue-800 py-2 px-3 rounded-md'>
                    Inciar Sesión
                    </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={handleMenu}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden dark:text-black text-white'>
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className='py-4'>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className='flex justify-center space-x-12 items-center'>
                        <a href="#" className='bg-gradient-to-r from-cyan-500 to-blue-800 py-2 px-3 rounded-md'>
                            Inciar Sesión
                        </a>
                    </div>
                </div>
                )}
        </div>
    </nav>
  )
}

export default NavBar