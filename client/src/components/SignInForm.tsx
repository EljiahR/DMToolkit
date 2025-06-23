const SignInForm = () => {
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    
    return (
        <form id="sign-in-form" onSubmit={(e) => handleFormSubmit(e)}>
            <label htmlFor="sign-in-username">Username</label>
            <input id="sign-in-username" type="text" />

            <label htmlFor="sign-in-password">Password</label>
            <input id="sign-in-password" type="password" />

            <button type="submit">Sign In</button>
        </form>
    )
}

export default SignInForm;