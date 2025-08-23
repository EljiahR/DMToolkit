import { useAppSelector } from "../../lib/redux/hooks"
import { CharacterCreationNavigationOptions } from "../../lib/redux/types";
import { selectCharacterCreationIndex } from "../../lib/redux/uiSlice"

export default function() {
    const sectionIndex = useAppSelector(selectCharacterCreationIndex);

    const handleSectionChange = () => {
        
    }

    return (
        <div id="section-nav">
            {sectionIndex > 0 && 
                <button>&larr; {CharacterCreationNavigationOptions[sectionIndex - 1]}</button>
            }
            {sectionIndex < 7 &&
                <button>{CharacterCreationNavigationOptions[sectionIndex + 1]} &rarr;</button>
            }
        </div>
    )
}