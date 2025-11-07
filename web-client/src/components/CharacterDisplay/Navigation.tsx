import { isMobile } from "react-device-detect";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks"
import type { CharacterDisplayNavigationOptions } from "../../lib/redux/types";
import { selectCharacterDisplay, setCharacterDisplay } from "../../lib/redux/uiSlice";
import OverviewIcon from "../../assets/dashboard-1-svgrepo-com.svg?react";
import StatsIcon from "../../assets/stats-svgrepo-com.svg?react";
import CombatIcon from "../../assets/sword-svgrepo-com.svg?react";
import FeatsIcon from "../../assets/stats-alt-svgrepo-com.svg?react";
import SpellsIcon from "../../assets/star-alt-4-svgrepo-com.svg?react";
import InventoryIcon from "../../assets/bag-svgrepo-com.svg?react";

const Navigation = () => {
    const dispatch = useAppDispatch();
    const display = useAppSelector(selectCharacterDisplay);

    const setNav = (section: CharacterDisplayNavigationOptions) => {
        dispatch(setCharacterDisplay(section));
    };
    
    return (
        <nav id="character-display-nav" className="flex w-full justify-between px-2">
            <button id="character-overview-btn" className={`character-nav btn btn-secondary ${display == "Overview" ? "selected-nav" : ""}`} onClick={() => setNav("Overview")}>
                {isMobile ? 
                    <OverviewIcon className="h-5 w-5" />
                    :
                    <p>Overview</p>
                }
            </button>
            <button id="character-stats-btn" className={`character-nav btn btn-secondary ${display == "Stats" ? "selected-nav" : ""}`} onClick={() => setNav("Stats")}>
                {isMobile ? 
                    <StatsIcon className="h-5 w-5" />
                    :
                    <p>Stats</p>
                }
            </button>
            <button id="character-combat-btn" className={`character-nav btn btn-secondary ${display == "Combat" ? "selected-nav" : ""}`} onClick={() => setNav("Combat")}>
                {isMobile ? 
                    <CombatIcon className="h-5 w-5" />
                    :
                    <p>Combat</p>
                }
            </button>
            <button id="character-feats-btn" className={`character-nav btn btn-secondary ${display == "Feats" ? "selected-nav" : ""}`} onClick={() => setNav("Feats")}>
                {isMobile ? 
                    <FeatsIcon className="h-5 w-5" />
                    :
                    <p>Feats</p>
                }
            </button>
            <button id="character-spells-btn" className={`character-nav btn btn-secondary ${display == "Spells" ? "selected-nav" : ""}`} onClick={() => setNav("Spells")}>
                {isMobile ? 
                    <SpellsIcon className="h-5 w-5" />
                    :
                    <p>Spells</p>
                }
            </button>
            <button id="character-inventory-btn" className={`character-nav btn btn-secondary ${display == "Inventory" ? "selected-nav" : ""}`} onClick={() => setNav("Inventory")}>
                {isMobile ? 
                    <InventoryIcon className="h-5 w-5" />
                    :
                    <p>Inventory</p>
                }
            </button>
        </nav>
    )
}

export default Navigation;
