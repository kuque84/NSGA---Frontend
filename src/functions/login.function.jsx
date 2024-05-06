import { loginService } from "../services/usuario.services";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

export const uselogin = async (dni, password) => {
  const res = await loginService(dni, password);
  if (res.token) {
      console.log("Usuario autenticado");
      return true;
  } else {
      alert("Usuario o contraseña incorrectos");
      return false;
  }
}