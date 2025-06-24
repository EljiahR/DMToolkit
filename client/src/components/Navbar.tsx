import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">
                <button type="button">Home</button>
            </Link>
            <Link to="/sign-in?redirectUrl=/create-a-character">
                <button type="button">Create Character</button>
            </Link>
        </nav>
    )
}

export default Navbar;