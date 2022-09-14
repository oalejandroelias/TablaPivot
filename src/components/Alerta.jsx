import React from "react";

const Alerta = ({ alerta }) => {
  return (
    <div
      className={`${
        alerta.error ? "text-red-600" : "text-sky-600"
      } text-center p-3 rounded-xl uppercase font-bold text-sm my-10`}
    >
      {alerta.msg}
    </div>
  );
};

export default Alerta;
