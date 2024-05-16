import React from 'react'
import { useNavigate } from 'react-router-dom'

const ControlPanel = () => {
    const navigate = useNavigate()

  return (
    <div className='w-full h-fit relative my-1 mx-4'>
        <div className="bg-sky-100 border border-secondary rounded-md py-0 px-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-2xl sm:text-4xl lg:text-5xl text-center tracking-wide py-2">
          Sección Académica
        </h1>
            <button
                onClick={() => navigate('/ciclolectivo')}
                className='mr-3 text-xs sm:text-sm lg:text-lg z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300'>
                Ciclo Lectivo
            </button>
            <button
                onClick={() => navigate('/planesestudio')}
                className='mr-3 text-xs sm:text-sm lg:text-lg z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300'>
                Planes de Estudio
            </button>
            <button
                onClick={() => navigate('/curso')}
                className='mr-3 text-xs sm:text-sm lg:text-lg z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300'>
                Cursos
            </button>
            <button
                onClick={() => navigate('/divisiones')}
                className='mr-3 text-xs sm:text-sm lg:text-lg z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300'>
                Divisiones
            </button>
            <button
                onClick={() => navigate('/materias')}
                className='mr-3 text-xs sm:text-sm lg:text-lg z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300'>
                Materias
            </button>
        </div>

        <div className="bg-sky-100 border border-secondary rounded-md py-0 px-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-60 relative font-semibold mt-4 mb-6">
        <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-2xl sm:text-4xl lg:text-5xl text-center tracking-wide py-2">
          Sección de Usuarios
        </h1>
            <button
                onClick={() => navigate('/usuarios')}
                className='mr-3 text-xs sm:text-sm lg:text-lg z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300'>
                Usuarios
            </button>
            <button
                onClick={() => navigate('/roles')}
                className='mr-3 text-xs sm:text-sm lg:text-lg z-10 border border-primary p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300'>
                Roles
            </button>
        </div>
    </div>
    
  )
}

export default ControlPanel