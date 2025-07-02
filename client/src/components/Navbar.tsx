import { Link } from "react-router";
import { useAppSelector } from "../lib/redux/hooks";

const Navbar = () => {
    const username = useAppSelector((state) => state.user.username);
    
    return (
        <div>
            <nav>
                <Link to="/">
                    <button type="button">Home</button>
                </Link>
                <Link to="/sign-in?redirectUrl=/create-a-character">
                    <button type="button">Create Character</button>
                </Link>
            </nav>
            <div>Hello {username}</div>
        </div>
        
    )
}

export default Navbar;