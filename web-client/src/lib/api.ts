import axios from "axios";
import type { RegisterErrors, Token } from "./types/apiResponses";
import type { StartupDataDto } from "./types/dm-tool-types/collections/startupData";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const api = axios.create({
    baseURL: BACKEND_URL != "" && BACKEND_URL != null && BACKEND_URL != undefined ? BACKEND_URL : "https://localhost:7179"
});

export const apiLogin = async (email: string, password: string) => {
    const response = await api.post<Token>("/login", { email, password }, { withCredentials: true });
    return response.data;
}; 

export const apiRegister = async (email: string, password: string) => {
    const response = await api.post<RegisterErrors | null>("/register", {email, password});
    return response.data;
}; 

export const apiRefreshToken = async (refreshToken: string) => {
    const response = await api.post<Token>("/refresh", { refreshToken });
    return response.data;
}

export const apiInfo = async (accessToken: string) => {
    const response = await api.get<{email: string, isEmailConfirmed: boolean}>("/manage/info", {headers: {Authorization: `Bearer ${accessToken}`}})
    return response.data;
}

export const apiGetStartupData = async () => {
    const response = await api.get<StartupDataDto>("dmtoolkit");
    return response.data;
}