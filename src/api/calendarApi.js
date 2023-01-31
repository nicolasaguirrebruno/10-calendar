import axios from "axios";
import { getEnvVaiables } from "../helpers";

const { VITE_API_URL } = getEnvVaiables();

const calendarApi = axios.create({
  baseURL: VITE_API_URL,
});

// Todo: configurar interceptores
calendarApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "x-token": localStorage.getItem("token"),
  };

  return config;
});

export default calendarApi;
