import axios from 'axios'
import Cookies from "js-cookie";

const config = {
    baseURL: process.env.REACT_APP_BASE_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
}
export const axiosInstance = axios.create(config)
axiosInstance.interceptors.request.use((axiosConfig) => {
    const httpConfig = { ...axiosConfig };
    const token = Cookies.get("cookiename");
    if (token) {
        httpConfig.headers.Authorization = `Bearer ${Cookies.get("cookiename")}`;
    }
    return httpConfig;
});