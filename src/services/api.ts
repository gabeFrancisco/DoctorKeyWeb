import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from "axios";
import { getSession } from "next-auth/react";
const api = axios.create({
  baseURL: "https://doctorkeyapi.azurewebsites.net/",
  timeout: 10000
})

api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    try{
      const session = await getSession();
      if(session){
        config.headers["Authorization"] = `Bearer ${session.user.accessToken}`;
      }
      return config
    }
    catch(error){
      if(!window.navigator.onLine){
        alert("no internet connection!")
      }
      return config
    }
  }
)

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if(error.response.status === 401){
      window.location.pathname = '/login'
    }
  }
)

export default api;