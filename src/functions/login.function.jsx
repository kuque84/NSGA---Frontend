import { loginService } from "../services/usuario.services";

export const uselogin = async (dni, password) => {
  const res = await loginService(dni, password);
  if (res.token) {
      //console.log("Usuario autenticado");
      return true;
  } else {
      alert("Usuario o contraseña incorrectos");
      return false;
  }
}