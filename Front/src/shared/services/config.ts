import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.156:3000/Cars",
});

api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers["Content-Type"] = `application/json`;
    config.headers["Accept"] = "application/json";
  }
  return config;
});

export default api;
