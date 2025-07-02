import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "./AuthProvider";
import { useAppDispatch } from "../lib/redux/hooks";
import { setUser } from "../lib/redux/userSlice";

const authenticationStates = {
    loading: 0,
    authorized: 1,
    unauthorized: 2
} as const;

interface Props {
    children: React.ReactNode
}

export const ChatHomePage = ({ children }: Props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [authenticationState, setAuthenticationState] = useState<number>(authenticationStates.loading);
    const { status } = useAuth();

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                await status();
                dispatch(setUser("data"));
                setAuthenticationState(authenticationStates.authorized);
            } catch (error) {
                setAuthenticationState(authenticationStates.unauthorized);
                console.error("Not authorized", error);
                navigate("/sign-in");              
            }
        };

        checkAuthStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        authenticationState == authenticationStates.loading ? 
            <div>Loading...</div> : 
            {children} 
              
    )
}