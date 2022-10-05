import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import LoginB from "./pages/LoginB";
import Listado from "./pages/Listado";
import AuthLayout from "./layouts/AuthLayout";
import { AuthProvider } from "./context/AuthProvider";
import RutaProtegida from "./layouts/RutaProtegida";
import Registrar from "./pages/Registrar";
import OlvidePassword from "./pages/OlvidePassword";
import NuevoPassword from "./pages/NuevoPassword";
import ConfirmarCuenta from "./pages/ConfirmarCuenta";
import { IntervencionesProvider } from "./context/IntervencionesProvider";
import LoginC from "./pages/LoginC";
import Encuesta from "./pages/Encuesta";
import Configuracion from "./pages/Configuracion";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <IntervencionesProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="login" element={<Login />} />
              <Route path="loginb" element={<LoginB />} />
              <Route path="loginc" element={<LoginC />} />
              <Route path="registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route path="configuracion" element={<Configuracion />} />

              <Route
                path="olvide-password/:token"
                element={<NuevoPassword />}
              />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>
            <Route path="/listado" element={<RutaProtegida />}>
              <Route index element={<Listado />} />
            </Route>
            <Route path="/encuesta">
              <Route index element={<Encuesta />} />
            </Route>
          </Routes>
        </IntervencionesProvider>
      </AuthProvider>
    </BrowserRouter>
    // <div className="App">

    //   <TablaPivot />
    //   <ReadExcel />

    // </div>
  );
}

export default App;
