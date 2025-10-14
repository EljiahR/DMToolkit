import Navbar from "./components/Navbar"
import { Outlet } from "react-router";

const Layout = () => {
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