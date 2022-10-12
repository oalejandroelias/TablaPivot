import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Links = () => {
  return (
    <div>
      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-black uppercase text-sm"
          to="/configuracion"
        >
          Configuración
        </Link>
        <Link
          className="block text-center my-5 text-black uppercase text-sm"
          to="/configuracion-tipo"
        >
          Configuracion Tipo
        </Link>
      </nav>
    </div>
  );
};

export default Links;
