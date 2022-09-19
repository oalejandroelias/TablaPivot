import { useState, useEffect} from 'react'
import {Link, useParams } from 'react-router-dom'
import userAxios from '../config/userAxios'
import Alerta from '../components/Alerta'

const NuevoPassword = () => {

  const [password, setPassword] = useState('');
  const [tokenValido, setTokenValido] = useState(false);
  const [alerta, setAlerta] = useState('');
  const [passwordModificado, setPasswordModificado] = useState(false);

  const params = useParams();
  const {token} = params

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        /**TODO: mover hacia un cliente axios */
        await userAxios.get(`/usuarios/olvide-password/${token}`);
        setTokenValido(true);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
    }
    comprobarToken();

  }, []);

  const handleSubmit = async (e) => {
    console.log(password.length)
    e.preventDefault();

    if(password.length < 6){
      setAlerta({
        msg: "El password debe ser minimo de 6 caracteres",
        error: true
      })

      return;
    }

    try {
      const url = `/usuarios/olvide-password/${token}`;
      const { data } = await userAxios.post(url, { password });
      setAlerta({
        msg: "Password reestablecido",
        error: false
      })
      setPasswordModificado(true);
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }

  }

  const { msg } = alerta;
  
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl">Reestablece tu password y no pierdas tus {' '}<span className="text-slate-700">proyectos</span></h1>

      { msg && <Alerta alerta={alerta}/>}

      { tokenValido && (
        <form className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}>
      
        <div className="my-5 ">
          <label className="uppercase text-gray-600 block text-xl font-bold"
          htmlFor="password">Nuevo Password</label>
          <input id="password" type="password" placeholder="Escribe tu nuevo password" 
          className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          value={password}
          onChange={e => setPassword(e.target.value)}
          />

        </div>
        <input type="submit" value="Guardar nuevo password"
        className="bg-sky-700 w-full py-3 mb-5 text-white uppercase font-bold rounded-l hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>
      )}

      {passwordModificado && (
              <Link className="block text-center my-5 text-slate-500 uppercase text-sm" to="/">
              Iniciar Sesión
            </Link>
      )}
    </>
  )
}

export default NuevoPassword