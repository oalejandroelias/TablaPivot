import { Outlet, Navigate } from "react-router-dom";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import useAuth from "../hooks/useAuth";

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();

  if (cargando) return "cargando... ";

  return (
    <>
      {auth._id ? (
        <div className="bg-gray-100">
          <Header />
          <div className="md:flex md:min-h-screen ">
            <Sidebar />

            <main className="p-10 flex-1">
              <Outlet />
            </main>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default RutaProtegida;
