import { Link } from 'react-router-dom'
import { useState } from 'react'
import Alerta from '../components/Alerta'
import userAxios from '../config/userAxios'

const Registrar = () => {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repetirPassword, setRepetirPassword] = useState('');
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if([nombre, email, password, setPassword].includes('')){

      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return;
    }

    if(password !== repetirPassword){
      
      setAlerta({
        msg: 'Los password no son iguales',
        error: true
      })
      return;
    }

    if(password.length < 6){
      
      setAlerta({
        msg: '6 caracteres mínimo',
        error: true
      })
      return;
    }
    /**Si todo esta OK */
    setAlerta({});

    try {
     
      const {data} = await userAxios.post(`/usuarios`, {nombre, email, password});
      console.log(import.meta.env)
      setAlerta({
        msg: data.msg,
        error: false
      });

      setNombre('')
      setEmail('')
      setPassword('')
      setRepetirPassword('')

    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      });
    }
  }

  const {msg} = alerta;

  return (
    <>
    <h1 className="text-sky-600 font-black text-6xl">Crea tu cuenta y registra tus {' '}<span className="text-slate-700">proyectos</span></h1>

    <form className="my-10 bg-white shadow rounded-lg p-10"
    onSubmit={handleSubmit}>
      { msg && <Alerta alerta={alerta}/> }
      
      <div className="my-5 ">
        <label className="uppercase text-gray-600 block text-xl font-bold"
        htmlFor="nombre">Nombre</label>
        <input id="nombre" type="text" placeholder="Nombre" 
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        className="w-full mt-3 p-3 border rounded-xl bg-gray-50" />

      </div>
      <div className="my-5 ">
        <label className="uppercase text-gray-600 block text-xl font-bold"
        htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Email de Registro" 
         value={email}
         onChange={e => setEmail(e.target.value)}
        className="w-full mt-3 p-3 border rounded-xl bg-gray-50" />

      </div>
      <div className="my-5 ">
        <label className="uppercase text-gray-600 block text-xl font-bold"
        htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="password" 
         value={password}
         onChange={e => setPassword(e.target.value)}
        className="w-full mt-3 p-3 border rounded-xl bg-gray-50" />

      </div>
      <div className="my-5 ">
        <label className="uppercase text-gray-600 block text-xl font-bold"
        htmlFor="password2">Repetir Password</label>
        <input id="password2" type="password" placeholder="Repetir tu password" 
         value={repetirPassword}
         onChange={e => setRepetirPassword(e.target.value)}
        className="w-full mt-3 p-3 border rounded-xl bg-gray-50" />

      </div>
      <input type="submit" value="Crear cuenta"
      className="bg-sky-700 w-full py-3 mb-5 text-white uppercase font-bold rounded-l hover:cursor-pointer hover:bg-sky-800 transition-colors"
      />
    </form>

    <nav className="lg:flex lg:justify-between">
      <Link className="block text-center my-5 text-slate-500 uppercase text-sm" to="/">
        Ya tienes una cuenta? inicia Sesión
      </Link>
      <Link className="block text-center my-5 text-slate-500 uppercase text-sm" to="/olvide-password">
        Olvidé mi password
      </Link>
    </nav>
  </>
  )
}

export default Registrar