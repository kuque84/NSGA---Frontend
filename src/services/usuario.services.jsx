import axios from 'axios';
import { json } from 'react-router-dom';
import settings from '../Config/index';


//const API_URL = 'http://localhost:3000';
export async function loginService(dni, password) {
    const API_URL = settings.API_URL;
    let data={};
    try {
        //console.log("Ingresando al servicio de login");
        const response = await axios.post(`${API_URL}/usuario/login`, {dni, password});

        // Verifica si response.data es nulo o no contiene token o dni
        if (!response.data || !response.data.usuario || !response.data.usuario.token || !response.data.usuario.dni) {
            throw new Error("Respuesta de la API inválida. Falta token o dni.");
        }

        // Almacena token en localStorage
        localStorage.setItem('token', response.data.usuario.token);
        data = response.data.usuario;
        const Authenticated = true;
        //console.log("Token almacenado localmente: ", localStorage.getItem('token'));
        // Retorna los datos recibidos
        return {data, Authenticated}
    } catch (error) {
        // Registra el error para depuración (opcional)
        console.error("Error en el servicio de login:", error);

        // Proporciona un mensaje claro al usuario sobre el error
        throw new Error(`Ocurrió un problema durante el inicio de sesión. Por favor, inténtelo de nuevo. Error original: ${error.message}`);    
    }
}