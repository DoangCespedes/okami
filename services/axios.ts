import axios from "axios";
import servicesConfig from "./config";

const api = axios.create({
  baseURL: servicesConfig.baseURL,
  headers: servicesConfig.headers,
});

export default api;
