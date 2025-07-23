import { useAppSelector } from "../../lib/redux/hooks"

export default function() {
    const newCharacter = useAppSelector((state) => state.newCharacter);

    return (
        <div>
            <h2>Character Summary</h2>
            <div id="character-summary">
                <p>Name: {newCharacter.name}</p>
                <p>Class: {newCharacter.characterClassBase?.name}</p>
                <p>Background: {newCharacter.backgroundBase?.name}</p>
                <p>Species: {newCharacter.lineageBase != null ? newCharacter.lineageBase.name : newCharacter.speciesBase?.name}</p>
            </div>
        </div>
    )
}