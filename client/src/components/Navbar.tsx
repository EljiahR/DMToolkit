import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">
                <button type="button">Home</button>
            </Link>
            <Link to="/sign-in">
                <button type="button">Create Character</button>
            </Link>
        </nav>
    )
}

export default Navbar;