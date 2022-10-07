import { useContext } from "react";
import ConfiguracionesContext from "../context/ConfiguracionesProvider";

const useConfiguraciones = () => {
  return useContext(ConfiguracionesContext);
};

export default useConfiguraciones;
