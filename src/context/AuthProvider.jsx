import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import userAxios from "../config/userAxios";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [cargando, setCargando] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setCargando(false);
        return;
      }

      const config = {
        headers: {
          ContentType: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await userAxios.get("/usuarios/perfil", config);
        setAuth(data);
        // navigate("/proyectos");

        console.log(data);
      } catch (error) {
        setAuth({});
      } finally {
        setCargando(false); //Para que no redireccione al login cuando estoy logueado
      }
    };
    autenticarUsuario();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        cargando,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
