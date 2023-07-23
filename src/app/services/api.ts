import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from "axios";
import { getSession } from "next-auth/react";
const api = axios.create({
  baseURL: "http://localhost:5003",
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

export default api;