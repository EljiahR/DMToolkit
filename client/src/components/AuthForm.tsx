import { Link, useNavigate, useSearchParams } from "react-router";

const AuthForm = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const handleAnonymous = () => {
        const redirectUrl = searchParams.get("redirectUrl");
        navigate(redirectUrl ?? "/");
    }
    
    return (
        <div id="auth-section">
            <form id="sign-in-form" onSubmit={(e) => handleFormSubmit(e)}>
                <label htmlFor="sign-in-username">Username</label>
                <input id="sign-in-username" type="text" />

                <label htmlFor="sign-in-password">Password</label>
                <input id="sign-in-password" type="password" />

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