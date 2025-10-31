import { NavLink } from "react-router";

const NavigationLinks = ({className= "", btnClassNames = ""}: {className?: string, btnClassNames?: string}) => {
    return (
        <nav className={className}>
            <NavLink to="/" className={"btn btn-tertiary nav-link-fix " + btnClassNames}>
                <p>Home</p>
            </NavLink>
            <NavLink to="/create-a-character" className={"btn btn-tertiary nav-link-fix " + btnClassNames}>
                <p>Create a Character</p>
            </NavLink>
            <NavLink to="/character-display" className={"btn btn-tertiary nav-link-fix " + btnClassNames}>
                <p>View Active Character</p>
            </NavLink>
        </nav>
    )
}

export default NavigationLinks;