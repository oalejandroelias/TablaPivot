import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta";
import userAxios from "../config/userAxios";
import useAuth from "../hooks/useAuth";

const LoginB = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son requeridos",
        error: true,
      });
      return;
    }
    try {
      const { data } = await userAxios.post("/usuarios/login", {
        email: email,
        password: password,
      });

      setAlerta({});
      localStorage.setItem("token", data.token);
      setAuth(data);
      navigate("/listado");
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        setAlerta({
          msg: "No se puede conectar con el servidor",
          error: true,
        });
      }
    }
  };

  const msg = { alerta };

  return (
    <>
      <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">OVCM</h1>

          <p className="mt-4 text-gray-500">Bienvenido</p>
          {msg && <Alerta alerta={alerta} />}
        </div>

        <form
          action=""
          className="max-w-md mx-auto mt-8 mb-0 space-y-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Email"
                id="email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Contraseña"
                id="password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <nav className="lg:flex lg:justify-between">
              <Link
                className="block text-center my-5 text-black uppercase text-sm"
                to="registrar"
              >
                No tienes una cuenta? Regístrate
              </Link>
              <Link
                className="block text-center my-5 text-black uppercase text-sm"
                to="olvide-password"
              >
                Olvidé mi password
              </Link>
            </nav>

            <button
              type="submit"
              className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginB;
