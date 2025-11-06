import AuthForm from "../components/AuthForm";

const HomePage = () => {
    return (
        <div id="homepage" className="flex flex-col items-center">
            <div id="intro" className="my-10">
                <h1 className="text-center">DM Toolkit</h1>
                <h3 className="text-center text-lg">This is a toolkit to be used in conjunction with DnD 2024e</h3>
            </div>
            <div id="auth-section" className="section-display">
                <AuthForm />
            </div>
        </div>
    )
}

export default HomePage;