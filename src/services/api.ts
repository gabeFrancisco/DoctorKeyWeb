import axios, { InternalAxiosRequestConfig } from "axios";
import { getSession } from "next-auth/react";

const urls = {
  dev: "http://10.0.10.250:5003",
  prod: "https://doctorkeyapi.azurewebsites.net",
};

export const apiUrl =
  process.env.NODE_ENV === "production" ? urls.prod : urls.dev;

const api = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
});

api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  try {
    const session = await getSession();
    if (session) {
      config.headers["Authorization"] = `Bearer ${session.user.accessToken}`;
    }
    return config;
  } catch (error) {
    if (!window.navigator.onLine) {
      alert("no internet connection!");
    }
    return config;
  }
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.pathname = "/login";
    } else if (error.response.status === 408) {
      alert("Houve algum problema em nossos servidores! Tente mais tarde.");
    }
  }
);

export default api;
