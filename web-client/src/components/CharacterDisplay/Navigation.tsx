import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks"
import type { CharacterDisplayNavigationOptions } from "../../lib/redux/types";
import { selectCharacterDisplay, setCharacterDisplay } from "../../lib/redux/uiSlice";

export default function() {
    const dispatch = useAppDispatch();
    const display = useAppSelector(selectCharacterDisplay);

    const setNav = (section: CharacterDisplayNavigationOptions) => {
        dispatch(setCharacterDisplay(section));
    };
    
    return (
        <nav id="character-display-nav">
            <button id="character-overview-btn" className={`character-nav btn ${display == "Overview" ? "selected-nav" : ""}`} onClick={() => setNav("Overview")}>Overview</button>
            <button id="character-stats-btn" className={`character-nav btn ${display == "Stats" ? "selected-nav" : ""}`} onClick={() => setNav("Stats")}>Stats</button>
            <button id="character-combat-btn" className={`character-nav btn ${display == "Combat" ? "selected-nav" : ""}`} onClick={() => setNav("Combat")}>Combat</button>
            <button id="character-feats-btn" className={`character-nav btn ${display == "Feats" ? "selected-nav" : ""}`} onClick={() => setNav("Feats")}>Feats</button>
            <button id="character-spells-btn" className={`character-nav btn ${display == "Spells" ? "selected-nav" : ""}`} onClick={() => setNav("Spells")}>Spells</button>
            <button id="character-inventory-btn" className={`character-nav btn ${display == "Inventory" ? "selected-nav" : ""}`} onClick={() => setNav("Inventory")}>Inventory</button>
        </nav>
    )
}