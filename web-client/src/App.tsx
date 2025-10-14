import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePlayerCharacterPage from "./pages/CreatePlayerCharacterPage";
import Layout from "./Layout";
import SignInPage from "./pages/SignInPage";
import RegisterPage from "./pages/RegisterPage"
import CharacterDisplay from "./pages/CharacterDisplay";
import { TestProtectedPage } from "./pages/TestProtectedPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { apiGetStartupData } from "./lib/api";
import { setAllFromDto } from "./lib/redux/dmToolsSlice";

const App = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const getStartupData = async () => {
            try {
                console.log("Attempting to retrieve startup data...");
                const data = await apiGetStartupData();
                console.log("Data retrieved successfully!");
                dispatch(setAllFromDto(data));
            } catch (e) {
                console.log("Failed to fetch startup data.", e);
            }

        };

        getStartupData();
    }, []);
    
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