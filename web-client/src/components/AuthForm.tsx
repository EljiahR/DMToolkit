import { Link, useNavigate, useSearchParams } from "react-router";
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
        <div id="auth-section" className="flex flex-col">
            <form id="sign-in-form" onSubmit={(e) => handleFormSubmit(e)} className="flex flex-col">
                <label htmlFor="sign-in-email">Username</label>
                <input id="sign-in-email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="sign-in-password">Password</label>
                <input id="sign-in-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Sign In</button>
            </form>
            <Link to="/auth/register">
                <button>Register</button>
            </Link>
            <button onClick={handleAnonymous}>Continue without account</button>
        </div>
        
    )
}

export default AuthForm;