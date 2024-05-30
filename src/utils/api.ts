import axios, {AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { authUtil } from './authUtil';

const API_BASE_URL = process.env.REACT_APP_BASE_URL
console.log(API_BASE_URL)
const api = axios.create({
    baseURL: API_BASE_URL,
});

api.interceptors.request.use(
    (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        const token = authUtil.getToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => {
        if (error.response?.status === 401) {
            authUtil.removeToken();
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;
