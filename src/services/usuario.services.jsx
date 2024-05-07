import axios from 'axios';
import { json } from 'react-router-dom';

const API_URL = 'http://localhost:3000';

export async function loginService(dni, password) {
    let data={};
    try {
        //console.log("Ingresando al servicio de login");
        const response = await axios.post(`${API_URL}/usuario/login`, {dni, password});

        // Verifica si response.data es nulo o no contiene token o dni
        if (!response.data || !response.data.usuario || !response.data.usuario.token || !response.data.usuario.dni) {
            throw new Error("Respuesta de la API inválida. Falta token o dni.");
        }

        // Almacena token y dni en localStorage
        //localStorage.setItem('token', response.data.usuario.token);
        //localStorage.setItem('dni', response.data.usuario.dni);
        //console.log("Token:", localStorage.getItem('token'));
        data = response.data.usuario;
        //localStorage.setItem("Usuario:",data)

        localStorage.setItem(
            'user',
            JSON.stringify(data)
        )
        localStorage.setItem(
            'isAuthenticated',true)

        console.log("Datos locales almacenados:", localStorage.getItem('user'), localStorage.getItem('isAuthenticated'));

        // Retorna los datos recibidos
        return data
    } catch (error) {
        // Registra el error para depuración (opcional)
        console.error("Error en el servicio de login:", error);

        // Proporciona un mensaje claro al usuario sobre el error
        throw new Error(`Ocurrió un problema durante el inicio de sesión. Por favor, inténtelo de nuevo. Error original: ${error.message}`);    
    }
}