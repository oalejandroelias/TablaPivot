import { useEffect, useState, createContext } from "react";
import userAxios from "../config/userAxios";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ConfiguracionesContext = createContext();

const ConfiguracionesProvider = ({ children }) => {
  const [configuracion, setConfiguracion] = useState({});

  const nuevaConfiguracion = async (configuracion) => {
    try {
      // const token = localStorage.getItem("token");
      // if (!token) return;

      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${token}`,
      //   },
      // };

      //const {data} = await axios.post("https://diversidad.biamobile.com/api/web/sdi_com_configuracions", config)

      const { data } = await axios.post(
        "https://diversidad.biamobile.com/api/web/sdi_com_configuraciontipos",
        configuracion
      );

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const editarConfiguracion = async (configuracion) => {
    try {
      const { data } = await axios.put(
        `https://diversidad.biamobile.com/api/web/sdi_com_configuraciontipos/${configuracion.idconfiguraciontipo}`,
        configuracion
      );
    } catch (error) {
      console.log(error);
    }
  };

  const submitConfiguracion = async (configuracion) => {
    if (configuracion.idconfiguraciontipo) {
      await editarConfiguracion(configuracion);
    } else {
      await nuevaConfiguracion(configuracion);
    }
  };

  return (
    <ConfiguracionesContext.Provider value={{ submitConfiguracion }}>
      {children}
    </ConfiguracionesContext.Provider>
  );
};

export { ConfiguracionesProvider };

export default ConfiguracionesContext;
