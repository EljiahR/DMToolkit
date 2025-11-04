import MobileNav from "./components/MobileNav";
import Navbar from "./components/Navbar"
import { Outlet } from "react-router";
import { useLocation } from "react-router";
import { useAppDispatch } from "./lib/redux/hooks";
import { setMobileMenuVisibility } from "./lib/redux/uiSlice";
import { useEffect } from "react";
import { BrowserView, MobileView } from "react-device-detect";

const Layout = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(setMobileMenuVisibility(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);
    
    return (
        <div id="layout" className="flex flex-col h-svh items-center w-full">
            <BrowserView>
                <Navbar />
            </BrowserView>
            <MobileView>
                <MobileNav />
            </MobileView>
            <main>
                <Outlet />
            </main>
        </div>
    )
};

export default Layout;