import { useEffect } from "react";
import Navbar from "./components/Navbar"
import { Outlet } from "react-router";
import { apiGetStartupData } from "./lib/api";
import { useDispatch } from "react-redux";
import { setAllFromDto } from "./lib/redux/dmToolsSlice";

const Layout = () => {
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
        <div>
            <Navbar />
            <main  className="flex flex-col align-middle w-screen">
                <Outlet />
            </main>
        </div>
    )
};

export default Layout;