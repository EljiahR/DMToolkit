import { useAppSelector } from "../../lib/redux/hooks"

export default function() {
    const selectedCharacter = useAppSelector((state) => state.selectedCharacter);

    return (
        <div>
            <h2>Character Summary</h2>
            <div id="character-summary">
                <p>Name: {selectedCharacter.name}</p>
                <p>Class: {selectedCharacter.characterClass.base.name}</p>
                <p>Background: {selectedCharacter.background.base.name}</p>
                <p>Species: {selectedCharacter.species.base.name}</p>
            </div>
        </div>
    )
}