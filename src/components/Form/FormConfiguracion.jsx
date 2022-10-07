import { useState } from "react";
import useConfiguraciones from "../../hooks/useConfiguracion";

const FormConfiguracion = (props) => {
  const [idconfiguraciontipo, setIdconfiguraciontipo] = useState(props.id);
  const [descripcion, setDescripcion] = useState(props.descripcion);
  const [activo, setActivo] = useState(props.activo);

  const { submitConfiguracion } = useConfiguraciones();

  const handleChange = (event) => {
    if (event.target.checked) {
      console.log("✅ Checkbox is checked");
    } else {
      console.log("⛔️ Checkbox is NOT checked");
    }
    setActivo((current) => !current);
    console.log(activo);
  };

  const handleSubmit = async (e) => {
    console.log(idconfiguraciontipo, descripcion, activo);
    e.preventDefault();

    if ([descripcion, activo].includes("")) {
      mostrarAlerta({
        msg: "Todos los campos son requeridos",
        error: true,
      });
      return;
    }
    await submitConfiguracion({ idconfiguraciontipo, descripcion, activo });

    setIdconfiguraciontipo(null);
    setActivo(null);
    setDescripcion("");
  };

  const optionsDni = [
    {
      value: "dni",
      label: "DNI/DU",
    },
    {
      value: "lc",
      label: "LC",
    },
    {
      value: "le",
      label: "LE",
    },
    {
      value: "ci",
      label: "CI",
    },
    {
      value: "pasaporte",
      label: "Pasaporte",
    },
  ];

  return (
    <>
      <section className="">
        <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div className="">
            {/* <div className="lg:py-12 lg:col-span-2">
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div className="mt-8">
                <a href="" className="text-2xl font-bold text-pink-600">
                  {" "}
                  0151 475 4450{" "}
                </a>

                <address className="mt-2 not-italic">
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
              </div>
            </div> */}

            <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
              <form action="" className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="" htmlFor="descripcion">
                      Descripción
                    </label>
                    <input
                      className="w-full rounded bg-transparent border border-black dark:border-white focus:border-pink-700 dark:focus:border-pink-700 text-base outline-none text-black dark:text-white py-1 px-3 leading-8 transition-colors"
                      placeholder="Nombres Autopercibidos"
                      type="text"
                      id="descripcion"
                      value={descripcion}
                      onChange={(e) => {
                        setDescripcion(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="text-center grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <label htmlFor="activo">
                    <input
                      type="checkbox"
                      value={activo}
                      onChange={handleChange}
                      id="activo"
                      name="activo"
                    />
                    Activo
                  </label>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto">
                    <span className="font-medium"> Continuar </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormConfiguracion;
