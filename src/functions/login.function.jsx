import { loginService } from "../services/usuario.services";

export const uselogin = async (dni, password) => {
  const res = await loginService(dni, password);
  //console.log('login.function: ',dni, password)
  if (res) {
    const {data, Authenticated} = res;
      //console.log("Usuario autenticado");
      return {data, Authenticated};
  } else {
      alert("Usuario o contraseña incorrectos");
      return false;
  }
}