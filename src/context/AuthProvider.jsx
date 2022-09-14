import axios from "axios";
import { useEffect, useState, createContext, Children } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";
import userAxios from "../config/UserAxios";

const AuthContext = createContext();

const AuthProvider = (children) => {
  const [auth, setAuth] = useState({});
  const [cargando, setCargando] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        return setCargando(false);
      }

      const config = {
        headers: {
          ContentType: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await userAxios.get("usuarios/perfil", config);
        setAuth(data);

        console.log(data);
      } catch (error) {
        setAuth({});
      } finally {
        setCargando(false);
      }
    };

    autenticarUsuario();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth, cargando }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
