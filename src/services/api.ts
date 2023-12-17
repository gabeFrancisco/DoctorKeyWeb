import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from "axios";
import { getSession } from "next-auth/react";

export const urls = {
  "dev": "http://10.0.10.250:5003",
  "prod": "https://doctorkeyapi.azurewebsites.net",
}

const api = axios.create({
  baseURL: urls.prod,
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