import { Link } from "react-router-dom"
import { BiUser, BiKey } from "react-icons/bi";
import { uselogin } from "../functions/login.function";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from '../context/userContext';


const Login = () => {
    const [dni, setDni] = useState('')
    const [password, setPassword] = useState('')
    const { user, setUser, isAuthenticated, setIsAuthenticated } = useUserContext();
    const navigate = useNavigate()

    const handleLogin = async () => {
        //console.log(dni,password)
        if(dni && password){
            const {data, Authenticated} = await uselogin(dni, password)
            //console.log('data: ', data)
            setUser(data)
            //console.log('user: ', user)
            setIsAuthenticated(Authenticated)
            if (Authenticated) {
                navigate("/alumnos")
            }
        }
    }
    
  return (
    <div>
        <div className="bg-slate-50 border border-secondary rounded-md p-8 shadow-lg backdrop:filter backdrop-blur-sm bg-opacity-60 relative font-semibold">
            <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text text-xl sm:text-3xl lg:text-4xl text-center tracking-wide py-2">Inicio de Sesión</h1>
                <div className="relative mt-4 mb-6">
                    <input 
                        value={dni} 
                        onChange={(e) => setDni(e.target.value)}
                        type="text" 
                        autoComplete="off" 
                        name="dni" 
                        id="dni" 
                        className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" 
                        placeholder="" 
                        required
                    />
                    <label htmlFor="dni" className="peer-focus:font-medium absolute text-sm text-primary duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">N° de Documento:</label>
                    <BiUser htmlFor="dni" className="absolute top-1 right-0 text-primary peer-focus:text-secondary" />
                </div>
                <div className="relative mt-4 mb-6">
                    <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" 
                        autoComplete="off" 
                        name="password" 
                        id="password" 
                        className="block py-0 px-0 w-full text-base text-secondary bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                        placeholder=""
                        required 
                        onKeyDown={(e) => {
                            e.key === "Enter" && handleLogin();
                          }}
                    />
                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-primary duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contraseña:</label>
                    <BiKey htmlFor="password" className="absolute top-1 right-0 text-primary peer-focus:text-secondary"/>
                </div>
                <div className="flex justify-between items-center text-xs m">
                    <div className="flex">
                        <input className="mr-1" type="checkbox" name="" id="rememberme"/>
                        <label htmlFor="rememberme">Recuérdame</label>
                    </div>
                    <Link className="text-blue-500" to='/forget'>Cual es mi contraseña?</Link>
                </div>
                <button 
                    onClick={()=>handleLogin(dni, password)} 
                    className='border border-primary w-full p-3 my-4 text-black dark:text-white hover:text-white dark:hover:text-black rounded-md hover:bg-gradient-to-r from-primary to-secondary ease-in duration-300'
                >
                    Iniciar Sesión
                </button>
                <div className="w-full text-center">
                    <span className="mt-4 text-xs">Nuevo? <Link className="text-blue-500" to='/register'>Solicitar un Usuario</Link></span>
                </div>
        </div>
    </div>
  )
}

export default Login