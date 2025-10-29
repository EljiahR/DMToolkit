import AuthForm from "../components/AuthForm";

const HomePage = () => {
    return (
        <div id="homepage">
            <div id="intro" className="my-20">
                <h1 className="text-center">DM Toolkit</h1>
                <h3 className="text-center text-lg">This is a toolkit to be used in conjunction with DnD 2024e</h3>
            </div>
            <div id="auth-section">
                <AuthForm />
            </div>
        </div>
    )
}

export default HomePage;