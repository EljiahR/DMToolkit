import { NavLink, useNavigate, useSearchParams } from "react-router";
import { useAuth } from "./AuthProvider";
import { useState } from "react";
import { InputWithFloatingLabel } from "./misc/InputWithFloatingLabel";

const AuthForm = () => {
    const [searchParams] = useSearchParams();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();
    
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await login(username, password);
        } catch (e) {
            console.log("Error signing in.", e);
        }
    }

    const handleAnonymous = () => {
        
        const redirectUrl = searchParams.get("redirectUrl");
        navigate(redirectUrl ?? "/");
    }
    
    return (
        <div id="auth-section" className="flex flex-col w-full p-2 gap-1">
            <form id="sign-in-form" onSubmit={(e) => handleFormSubmit(e)} className="flex flex-col gap-3">
                <InputWithFloatingLabel 
                    id="sign-in-username" 
                    type="text" 
                    label="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Enter your username..." 
                />
                <InputWithFloatingLabel 
                    id="sign-in-password" 
                    type="password" 
                    label="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Enter your password..." 
                />
                <button className="btn btn-primary" type="submit">Sign In</button>
            </form>
            <NavLink to="/auth/register" className="btn btn-secondary">
                <p>Register</p>
            </NavLink>
            <button className="btn btn-tertiary" onClick={handleAnonymous}>Continue without account</button>
        </div>
        
    )
}

export default AuthForm;