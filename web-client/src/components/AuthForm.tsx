import { NavLink, useNavigate, useSearchParams } from "react-router";
import { useAuth } from "./AuthProvider";
import { useState } from "react";

const AuthForm = () => {
    const [searchParams] = useSearchParams();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();
    
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await login(email, password);
    }

    const handleAnonymous = () => {
        
        const redirectUrl = searchParams.get("redirectUrl");
        navigate(redirectUrl ?? "/");
    }
    
    return (
        <div id="auth-section" className="flex flex-col w-full p-2 gap-1">
            <form id="sign-in-form" onSubmit={(e) => handleFormSubmit(e)} className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <label htmlFor="sign-in-email" className="text-xl">Username</label>
                    <input className="text-input" id="sign-in-email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Username" />
                </div>
                
                <div className="flex flex-col gap-1">
                    <label htmlFor="sign-in-password" className="text-xl">Password</label>
                    <input className="text-input" id="sign-in-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="**********" />
                </div>
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