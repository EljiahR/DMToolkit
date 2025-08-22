import Combat from "../components/CharacterDisplay/Combat";
import Features from "../components/CharacterDisplay/Features";
import Inventory from "../components/CharacterDisplay/Inventory";
import Navigation from "../components/CharacterDisplay/Navigation";
import Overview from "../components/CharacterDisplay/Overview";
import Spells from "../components/CharacterDisplay/Spells";
import Stats from "../components/CharacterDisplay/Stats";
import { useAppSelector } from "../lib/redux/hooks"
import { selectCharacterDisplay } from "../lib/redux/uiSlice"

const view = {
    "Overview": <Overview />,
    "Stats": <Stats />,
    "Combat": <Combat />,
    "Feats": <Features />,
    "Spells": <Spells />,
    "Inventory": <Inventory />
}

export default function() {
    const displayedPage = useAppSelector(selectCharacterDisplay);
    
    return (
        <div id="character-display">
            <div id="view-container">
                {view[displayedPage]}
            </div>
            <Navigation />
        </div>
    )
}