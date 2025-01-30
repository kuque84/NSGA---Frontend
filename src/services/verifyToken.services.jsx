/*import axios from 'axios';
import { json } from 'react-router-dom';
import settings from '../Config/index';


export async function verifyTokenService(token) {
    const API_URL = settings.API_URL;
    let data={};
    try {
        //console.log("Token recibido en verifyTokenService: ", token);
        const response = await axios.post(`${API_URL}/usuario/verificar`, {token});
        
        // Verifica si response.data es nulo o no contiene token o dni
        if (!response.data) {
            throw new Error("Respuesta de la API inválida. Falta token.");
        }
        //console.log('response.data = ',response.data)

        // Obtiene los datos de la respuesta
        data = response.data.usuario;
        const Authenticated = true;
        // Retorna los datos recibidos
        return {data, Authenticated}
    } catch (error) {
        // Registra el error para depuración (opcional)
        
        console.error("Error en el servicio de verificación de token:", error);

        // Proporciona un mensaje claro al usuario sobre el error
        throw new Error(`Ocurrió un problema durante la verificación del token. Por favor, inténtelo de nuevo. Error original: ${error.message}`);    
    }
}*/
import axios from 'axios';
import settings from '../Config/index';

export async function verifyTokenService(token) {
  const API_URL = settings.API_URL;
  let data = {};
  try {
    // Configuración de Axios
    const response = await axios.post(
      `${API_URL}/usuario/verificar`,
      { token },
      {
        timeout: 10000, // 10 segundos de tiempo de espera
      }
    );

    // Verifica si response.data es nulo o no contiene token
    if (!response.data) {
      throw new Error('Respuesta de la API inválida. Falta token.');
    }

    // Obtiene los datos de la respuesta
    data = response.data.usuario;
    const Authenticated = true;

    // Retorna los datos recibidos
    return { data, Authenticated };
  } catch (error) {
    // Registra el error para depuración (opcional)
    console.error('Error en el servicio de verificación de token:', error);

    // Proporciona un mensaje claro al usuario sobre el error
    if (error.code === 'ECONNABORTED') {
      throw new Error('La solicitud tardó demasiado tiempo. Por favor, inténtelo de nuevo.');
    } else if (!error.response) {
      throw new Error('Error de red. Por favor, verifique su conexión.');
    } else {
      throw new Error(
        `Ocurrió un problema durante la verificación del token. Por favor, inténtelo de nuevo. Error original: ${error.message}`
      );
    }
  }
}
