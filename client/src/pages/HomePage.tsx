import SignInForm from "../components/SignInForm";

const HomePage = () => {
    return (
        <div>
            <div>This is a toolkit to be used in conjunction with DnD 2025e</div>
            <div id="auth-section">
                <SignInForm />
                <button>Register</button>
                <button>Continue without an account</button>
            </div>
        </div>
    )
}

export default HomePage;