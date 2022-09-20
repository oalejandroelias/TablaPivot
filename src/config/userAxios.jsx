import axios from "axios";

const userAxios = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
});

export default userAxios;
