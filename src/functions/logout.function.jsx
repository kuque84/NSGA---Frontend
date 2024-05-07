import { useUserContext } from "../context/userContext";

export const useLogout = () => {
  const { setUser, setIsAuthenticated } = useUserContext();

  const logout = () => {
    // Limpiar el estado del usuario
    setUser(null);
    setIsAuthenticated(false);

    // Limpiar el estado del usuario en el almacenamiento local
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
  };

  return logout;
};