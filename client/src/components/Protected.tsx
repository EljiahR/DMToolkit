import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "./AuthProvider";

const authenticationStates = {
    loading: 0,
    authorized: 1,
    unauthorized: 2
} as const;

export const Protected: React.FC<{children: React.ReactNode}> = ({children}) => {
    const navigate = useNavigate();
    const [authenticationState, setAuthenticationState] = useState<number>(authenticationStates.loading);
    const { status } = useAuth();

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                await status();
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
            <>{children}</>
              
    )
}