import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePlayerCharacterPage from "./pages/CreatePlayerCharacterPage";
import Layout from "./Layout";
import SignInPage from "./pages/SignInPage";
import RegisterPage from "./pages/RegisterPage"
import CharacterDisplay from "./pages/CharacterDisplay";
import { TestProtectedPage } from "./pages/TestProtectedPage";

const App = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<HomePage />} />
                <Route path="create-a-character" element={<CreatePlayerCharacterPage />} />
                <Route path="character-display" element={<CharacterDisplay />} />
                <Route path="auth">
                    <Route path="sign-in" element={<SignInPage />} />
                    <Route path="register" element={<RegisterPage />} />
                </Route>
                
            </Route>
            
            <Route path="/protected-test" element={<TestProtectedPage />} />
        </Routes>
    );
}

export default App;