import Navbar from "./components/Navbar"
import { Outlet } from "react-router";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
};

export default Layout;