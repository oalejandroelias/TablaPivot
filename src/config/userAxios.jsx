import axios from "axios";

const userAxios = axios.create({
  // baseURL: `${import.meta.env.BACKEND_URL}/api`,
  // baseURL: "127.0.0.1/5173",
  baseURL: "https://ovcm.biamobile.com/web",
});

export default userAxios;
