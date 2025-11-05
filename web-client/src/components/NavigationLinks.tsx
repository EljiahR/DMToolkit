import { NavLink } from "react-router";
import { useAppSelector } from "../lib/redux/hooks";
import { selectCharacterId } from "../lib/redux/selectedCharacterSlice";

const NavigationLinks = ({className= "", btnClassNames = ""}: {className?: string, btnClassNames?: string}) => {
    const characterId = useAppSelector(selectCharacterId);
    
    const handleClick = (e: React.MouseEvent) => {
        if (characterId === "") {
            e.preventDefault();
        }
    }
    
    return (
        <nav className={className}>
            <NavLink to="/" className={"btn btn-tertiary " + btnClassNames}>
                <p>Home</p>
            </NavLink>
            <NavLink to="/create-a-character" className={"btn btn-tertiary " + btnClassNames}>
                <p>Create a Character</p>
            </NavLink>
            <NavLink to="/character-display" className={"btn btn-tertiary " + btnClassNames + (characterId === "" ? " disabled" : "")} onClick={handleClick}>
                <p>View Active Character</p>
            </NavLink>
        </nav>
    )
}

export default NavigationLinks;