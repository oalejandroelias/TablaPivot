import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";
const AuthProvider = () => {
  const [auth, setAuth] = useState({});
  const [cargando, setCargando] = useState(true);

  return <div>AuthProvider</div>;
};

export default AuthProvider;
