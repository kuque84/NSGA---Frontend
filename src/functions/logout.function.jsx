import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";

export const useLogout = () => {
  const { setUser, setIsAuthenticated } = useUserContext();
  const navigate = useNavigate();
  const logout = () => {
    // Limpiar el estado del usuario
    setUser(null);
    setIsAuthenticated(false);

    // Limpiar el estado del usuario en el almacenamiento local
    localStorage.removeItem('token');
    // navegar a /
    navigate('/');
    // window.location.href = '/'; // redirigir a la página de inicio
  };

  return logout;
};