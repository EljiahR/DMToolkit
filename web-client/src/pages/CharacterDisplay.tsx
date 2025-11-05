import Combat from "../components/CharacterDisplay/Combat";
import Feats from "../components/CharacterDisplay/Feats";
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
    "Feats": <Feats />,
    "Spells": <Spells />,
    "Inventory": <Inventory />
}

const CharacterDisplay = () => {
    const displayedPage = useAppSelector(selectCharacterDisplay);
    
    return (
        <div id="character-display" className="flex flex-col gap-5">
            <Navigation />
            <div id="view-container" className="flex-grow">
                {view[displayedPage]}
            </div>
            
        </div>
    )
}

export default CharacterDisplay;