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
      } catch (error) {
        if (error.response) {
          /**Ver si el alert sirve aca */
          if (error.code === "ERR_NETWORK") {
            setAlerta({
              msg: "No se puede conectar con el servidor",
              error: true,
            });
          }
          /**Ver si el alert sirve aca */
          // 👇️ log status code here
          console.log(error.response.status);
          console.log(error.response.statusText);
          console.log(error.message);
          console.log(error.response.headers); // 👉️ {... response headers here}
          console.log(error.response.data); // 👉️ {... response data here}
        } else if (error.request) {
          // 👇️ Request was made, but no response was received
          console.log(error.request);
        } else {
          // 👇️ An error was thrown when setting up the request
          console.log(error.message);
        }
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
