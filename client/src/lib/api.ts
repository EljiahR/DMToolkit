import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const api = axios.create({
    baseURL: BACKEND_URL != "" && BACKEND_URL != null && BACKEND_URL != undefined ? BACKEND_URL : "https://localhost:7179"
});

export const apiLogin = async (email: string, password: string) => {
    const response = await api.post("/login", {email, password}, {params: {useCookies: false}});
    return response.data;
}; 

export const apiRegister = async (email: string, password: string) => {
    const response = await api.post("/register", {email, password});
    return response.data;
}; 

export const apiRefreshToken = async (refreshToken: string) => {
    const response = await api.post<{accessToken: string, refreshToken: string}>("/refresh", { refreshToken });
    return response.data;
}