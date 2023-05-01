import axios from "axios";

const HttpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL || "http://localhost",
  withCredentials: true,
});

HttpClient.interceptors.request.use(async (config) => {
  if (config.url !== "/sanctum/csrf-cookie") {
    await HttpClient.get("/sanctum/csrf-cookie");
    return config;
  }

  return config;
});
export default HttpClient;
