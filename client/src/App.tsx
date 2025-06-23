import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePlayerCharacterPage from "./pages/CreatePlayerCharacterPage";
import Layout from "./Layout";

const App = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="create-a-character" element={<CreatePlayerCharacterPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;