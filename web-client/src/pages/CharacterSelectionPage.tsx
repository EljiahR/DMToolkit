import { NavLink } from "react-router";
import { useAppSelector } from "../lib/redux/hooks";
import { selectAllCharacters } from "../lib/redux/userSlice";
import type { Character } from "../lib/types/dm-tool-types/instances/character";

const CharacterSelectionPage = () => {
    const characters = useAppSelector(selectAllCharacters);

    return (
        <div id="character-selection-page" className="flex flex-col gap-5">
            <div className="section-header">
                <p>Select a Character</p>
            </div>
            <div className="section-display">
                {characters.length > 0 ? 
                    <div>
                        {characters.map((character) => {
                            return <CharacterDisplay character={character} />
                        })}
                    </div>
                :
                    <div>
                        <p>No characters</p>
                        <NavLink to="/create-a-character" className={"btn btn-tertiary "}>
                            <p>Create a Character</p>
                        </NavLink>
                    </div>
                }
            </div>
        </div>
    )
}

interface CharacterDisplayProps {
    character: Character
}

const CharacterDisplay = ({ character }: CharacterDisplayProps) => {
    return (
        <div>
            <p>{character.name}</p>
        </div>
    )
}

export default CharacterSelectionPage;