import { Link } from "react-router";
import { useAppSelector } from "../lib/redux/hooks";

const Navbar = () => {
    const username = useAppSelector((state) => state.user.username);
    
    return (
        <div className="w-full flex items-center justify-between px-2 py-1">
            <nav>
                <Link to="/">
                    <button type="button" className="btn btn-tertiary">Home</button>
                </Link>
                <Link to="/create-a-character">
                    <button type="button" className="btn btn-tertiary">Create Character</button>
                </Link>
                <Link to="/character-display">
                    <button type="button" className="btn btn-tertiary">View Active Character</button>
                </Link>
            </nav>
            {username != null && username?.trim() != "" && 
            <div>Hello {username}</div>
            }
        </div>
        
    )
}

export default Navbar;