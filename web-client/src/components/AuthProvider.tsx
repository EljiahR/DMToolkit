import React, { createContext, useContext } from "react";
import { apiInfo, apiLogin, apiRegister } from "../lib/api";
import { useAppDispatch, useAppSelector } from "../lib/redux/hooks";
import { clearAccessToken, setAccessToken } from "../lib/redux/authSlice";
import { setUser } from "../lib/redux/userSlice";

type AuthContextType = {
    login: (email: string, password: string) => Promise<any>;
    logout: () => void;
    register: (email: string, password: string) => Promise<any>;
    status: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const dispatch = useAppDispatch();
    const accessToken = useAppSelector((state) => state.auth.accessToken);
    
    const login = async (email: string, password: string) => {
        const data = await apiLogin(email, password);
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

    const status = async () => {
        if (accessToken) {
            const data = await apiInfo(accessToken);
            dispatch(setUser(data.email));
        } else {
            throw new Error;
        }
    }

    return (
        <AuthContext.Provider value={{ login, register, logout, status }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be within AuthProvider");
    return context;
}