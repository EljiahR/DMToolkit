import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePlayerCharacterPage from "./pages/CreatePlayerCharacterPage";
import Layout from "./Layout";
import SignInPage from "./pages/SignInPage";

const App = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<HomePage />} />
                <Route path="create-a-character" element={<CreatePlayerCharacterPage />} />
            </Route>
            <Route path="/sign-in" element={<SignInPage />} />
        </Routes>
    );
}

export default App;