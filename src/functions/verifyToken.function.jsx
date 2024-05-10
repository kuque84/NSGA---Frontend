import { verifyTokenService } from "../services/verifyToken.services";

export const useVerifyToken = async (token) => {
  //console.log('verifyToken.function.jsx: token recibido', token)
  const res = await verifyTokenService(token);
  if (res) {
      const {data, Authenticated} = res;
      //console.log("Usuario autenticado");
      return {data, Authenticated};
  } else {
    alert("token inválido");
      return false;
  }
}