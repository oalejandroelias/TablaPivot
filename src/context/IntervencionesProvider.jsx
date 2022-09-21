import { useEffect, useState, createContext } from "react";
import userAxios from "../config/userAxios";
import { useNavigate } from "react-router-dom";

const IntervencionesContext = createContext();

const IntervencionesProvider = ({ children }) => {
  const [intervenciones, setIntervenciones] = useState([]);
  const [alerta, setAlerta] = useState({});
  const [intervencion, setIntervencion] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const obtenerIntervenciones = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await userAxios.get("intervenciones", config);

        setIntervenciones(data);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerIntervenciones();
  }, []);

  const obtenerIntervencion = async (id) => {
    setCargando(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await userAxios(`/intervenciones/${id}`, config);
      setIntervencion(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <IntervencionesContext.Provider
      value={{ intervenciones, alerta, obtenerIntervencion }}
    >
      {children}
    </IntervencionesContext.Provider>
  );
};

export { IntervencionesProvider };

export default IntervencionesContext;
