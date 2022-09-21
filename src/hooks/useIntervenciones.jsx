import { useContext } from "react";
import IntervencionesContext from "../context/IntervencionesProvider";

const useIntervenciones = () => {
  return useContext(IntervencionesContext);
};

export default useIntervenciones;
