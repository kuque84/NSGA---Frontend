import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide py-2">
            NSGA
            <ul className='bg-gradient-to-r from-cyan-500 to-blue-800 text-transparent bg-clip-text text-2xl sm:text-4xl lg:text-5xl text-center tracking-wide py-2'>
                Nuevo Sistema de Gestión Académica
            </ul>
        </h1>
        <p className='mt-10 text-lg text-center dark:text-neutral-300 text-neutral-700 max-w-4xl'>
        El Nuevo Sistema de Gestión Académica (NSGA) es una propuesta para desarrollar una aplicación web diseñada para optimizar y mejorar la gestión académica del IPEM N° 168 "Diego de Rojas" en Villa General Belgrano, Córdoba, Argentina. Esta aplicación se centra en la carga y gestión de datos, la automatización de procesos administrativos y la centralización de la información académica, con el objetivo de mejorar la eficiencia y facilitar el acceso a la información para alumnos, profesores y personal administrativo.
        </p>
        <div className="flex justify-center my-10">
            <Link to="#" className='border border-cyan-500 w-full p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-800 ease-in duration-300' >
                Documentación
            </Link>
        </div>
        <div className='flex mt-10 justify-center'>
            <video autoPlay loop muted className='rounded-lg w-1/2 border border-cyan-700 shadow-cyan-400 mx-2 my-4'>
                <source src={video1} type='video/mp4' />
                Tu navegador no admite la etiqueta de vídeo.
            </video>
            <video autoPlay loop muted className='rounded-lg w-1/2 border border-cyan-700 shadow-cyan-400 mx-2 my-4'>
                <source src={video2} type='video/mp4' />
                Tu navegador no admite la etiqueta de vídeo.
            </video>
        </div>
    </div>
  )
};

export default Landing