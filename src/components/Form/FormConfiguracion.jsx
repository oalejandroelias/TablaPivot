import { useState } from "react";

const FormConfiguracion = (props) => {
  const [id, setId] = useState(props.id);
  const [descripcion, setDescripcion] = useState(props.descripcion);
  const [activo, setActivo] = useState(props.activo);

  const optionsGenero = [
    {
      value: "varon_cis",
      label: "Varon Cis",
    },
    {
      value: "mujer_cis",
      label: "Mujer Cis",
    },
    {
      value: "varon_trans",
      label: "Varon Trans",
    },
    {
      value: "mujer_trans",
      label: "Mujer Trans",
    },
    {
      value: "no_binaria",
      label: "Persona no binaria",
    },
    {
      value: "intersex",
      label: "Intersex",
    },
  ];

  const optionsOrientacionSexual = [
    {
      value: "heterosexual",
      label: "Heterosexual",
    },
    {
      value: "gay",
      label: "Gay",
    },
    {
      value: "lesbiana",
      label: "Lesbiana",
    },
    {
      value: "bisexual",
      label: "Bisexual",
    },
    {
      value: "pansexual",
      label: "Pansexual",
    },
    {
      value: "asexual",
      label: "Asexual",
    },
  ];
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

  const [demanda, setDemanda] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [tipoDoc, setTipoDoc] = useState(optionsDni[0].value);
  const [tipoGenero, setTipoGenero] = useState(optionsGenero[0].value);

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
              <form action="" className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="" htmlFor="nombre">
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
                  <label
                    for="AcceptConditions"
                    class="relative h-8 w-16 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id={id}
                      value={!activo}
                      onChange={(e) => {
                        setActivo(e.target.value);
                      }}
                      class="peer sr-only"
                    />

                    <span class="absolute inset-0 rounded-full bg-blue-400 transition peer-checked:bg-blue-600"></span>

                    <span class="absolute inset-0 m-1 h-6 w-6 rounded-full bg-white transition peer-checked:translate-x-8"></span>
                  </label>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                  >
                    <span className="font-medium"> Continuar </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
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
