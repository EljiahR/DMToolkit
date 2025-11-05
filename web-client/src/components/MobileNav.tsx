import HamburgerIcon from "../assets/hamburger-md-svgrepo-com.svg?react";
import ExitButtonIcon from "../assets/x-symbol-svgrepo-com.svg?react";
import { useAppDispatch, useAppSelector } from "../lib/redux/hooks";
import NavigationLinks from "./NavigationLinks";
import { setMobileMenuVisibility } from "../lib/redux/uiSlice";

const MobileNav = () => {
    const menuIsVisible = useAppSelector((state) => state.ui.mobileMenuIsVisible);
    const dispatch = useAppDispatch();

    const handleSetMenuVisibility = (isVisible: boolean) => {
        dispatch(setMobileMenuVisibility(isVisible));
    }

    return (
        <div id="mobile-nav" className="h-14 w-full flex items-center justify-between p-1">
            <button id="mobile-nav-btn" className="flex p-1 items-center rounded" onClick={() => handleSetMenuVisibility(true)}>
                <HamburgerIcon className="h-10 w-10 stroke-white"/>
            </button>
            <div>
                <p>DMToolkit</p>
            </div>
            <div id="mobile-menu" className={"fixed top-0 h-screen w-3/5 shadow bg-white p-1 z-20 duration-200 " + (menuIsVisible ? "left-0" : "-left-full hidden:delay-200")}>
                <div id="mobile-menu-header" className="flex p-2 justify-between items-center">
                    <h4 className="text-black">Menu</h4>
                    <button className="p-1 bg-red-500 rounded" onClick={() => handleSetMenuVisibility(false)}>
                        <ExitButtonIcon className="h-5 w-5 fill-white" />
                    </button>
                </div>
                <hr />
                <NavigationLinks className="flex flex-col pt-1 gap-1" btnClassNames="" />
            </div>
            {menuIsVisible && <ExitMenu />}
        </div>
    )
}

const ExitMenu = () => {
    const dispatch = useAppDispatch();
    
    return (
        <div className="w-screen h-screen z-10 fixed top-0 left-0 bg-opacity-40 bg-black" onClick={() => dispatch(setMobileMenuVisibility(false))}></div>
    )
}

export default MobileNav;