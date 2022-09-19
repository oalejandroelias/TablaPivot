import React from 'react'
import userAxios from '../config/userAxios'
import {useParams, Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Alerta from '../components/Alerta'

//u5utcsphmgo1g7ksv0go
const ConfirmarCuenta = () => {

  const [alerta, setAlerta] = useState({});
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `/usuarios/confirmar/${id}`;
        const { data } = await userAxios.get(url);
        setAlerta({ 
          msg: data.msg,
          error: false
         });
         setCuentaConfirmada(true);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
    }
    confirmarCuenta();
  
  }, [])
  

  const { msg } = alerta;

  return (
    <>
    <h1 className="text-sky-600 font-black text-6xl">Confirma tu  cuenta y crea tus {' '}<span className="text-slate-700">proyectos</span></h1>
    <div>
      {msg && <Alerta alerta={alerta}/>}

      {cuentaConfirmada && (
              <Link className="block text-center my-5 text-slate-500 uppercase text-sm" to="/">
              Iniciar Sesión
            </Link>
      )}
    </div>
   
   
  </>
  )
}

export default ConfirmarCuenta