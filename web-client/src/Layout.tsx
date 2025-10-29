import Navbar from "./components/Navbar"
import { Outlet } from "react-router";

const Layout = () => {
    return (
        <div id="layout" className="flex flex-col h-svh">
            <Navbar />
            <main  className="flex flex-col w-full flex-grow">
                <Outlet />
            </main>
        </div>
    )
};

export default Layout;