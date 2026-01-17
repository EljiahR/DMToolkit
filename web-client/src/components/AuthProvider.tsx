import React, { createContext, useContext } from "react";
import { apiSignIn, apiRegister } from "../lib/api";
import { useAppDispatch, useAppSelector } from "../lib/redux/hooks";
import { clearAccessToken, setAccessToken } from "../lib/redux/authSlice";

type AuthContextType = {
    login: (username: string, password: string) => Promise<any>;
    logout: () => void;
    register: (username: string, password: string) => Promise<any>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const dispatch = useAppDispatch();
    
    const login = async (username: string, password: string) => {
        const data = await apiSignIn(username, password);
        dispatch(setAccessToken(data.accessToken));
        localStorage.setItem("refreshToken", data.refreshToken);
    };

    const register = async (email: string, password: string) => {
        await apiRegister(email, password);
    };

    const logout = () => {
        dispatch(clearAccessToken());
        localStorage.removeItem("refreshToken");
    };

    return (
        <AuthContext.Provider value={{ login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be within AuthProvider");
    return context;
}