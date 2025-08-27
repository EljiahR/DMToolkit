import AuthForm from "../components/AuthForm";

const HomePage = () => {
    return (
        <div>
            <div className="text-center">This is a toolkit to be used in conjunction with DnD 2024e</div>
            <div id="auth-section">
                <AuthForm />
            </div>
        </div>
    )
}

export default HomePage;