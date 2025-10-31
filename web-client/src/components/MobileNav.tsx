import HamburgerIcon from "../assets/burger-menu-svgrepo-com.svg?react";
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
            <button id="mobile-nav-btn" className="flex p-1 items-center" onClick={() => handleSetMenuVisibility(true)}>
                <HamburgerIcon className="h-10 w-10 stroke-white" />
            </button>
            <div>
                <p>DMToolkit</p>
            </div>
            <div id="mobile-menu" className={"fixed top-0 left-0 h-screen w-3/5 bg-white " + (menuIsVisible ? "" : "hidden")}>
                <div id="mobile-menu-header" className="flex p-2 justify-between items-center">
                    <h4 className="text-black">Menu</h4>
                    <button className="p-0 bg-red-500" onClick={() => handleSetMenuVisibility(false)}>
                        <ExitButtonIcon className="h-10 w-10 fill-white" />
                    </button>
                </div>
                <hr />
                <NavigationLinks btnClassNames="w-full" />
            </div>
        </div>
    )
}

export default MobileNav;