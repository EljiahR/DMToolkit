import { useAppSelector } from "../lib/redux/hooks";
import NavigationLinks from "./NavigationLinks";

const Navbar = () => {
    const username = useAppSelector((state) => state.user.username);
    
    return (
        <div className="w-full flex items-center justify-between px-2 py-1">
            <NavigationLinks className="flex" />
            {username != null && username?.trim() != "" && 
            <div>Hello {username}</div>
            }
        </div>
        
    )
}

export default Navbar;