import { useUserConnecteService } from '@/composables/utilisateur/userConnecteService';
import axios, { type InternalAxiosRequestConfig } from 'axios';

const { userConnecte } = useUserConnecteService();
const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if(sessionStorage.getItem("token") != null){
    config.headers['Authorization'] = `Bearer ${sessionStorage.getItem("token")}`;
  }
  config.headers['Authorization'] = `Bearer ${userConnecte.value.token}`;
  return config;
});

export default axiosInstance;
