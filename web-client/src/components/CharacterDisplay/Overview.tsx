import { useAppSelector } from "../../lib/redux/hooks"

export default function() {
    const selectedCharacter = useAppSelector((state) => state.selectedCharacter);    
    
    return (
        <div>
            <div id="basic-overview">
                <h3>{selectedCharacter.name}</h3>
                <p>{selectedCharacter.characterClassBase?.name}</p>
            </div>
            <div id="origin">
                <p>{selectedCharacter.speciesBase?.name}</p>
                <p>{selectedCharacter.backgroundBase?.name}</p>
            </div>
            <div id="alignment">
                <p>{selectedCharacter.alignment}</p>
            </div>
            <div id="descriptions">
                <label htmlFor="physical-description">Physical</label>
                <textarea id="physical-description" readOnly>{selectedCharacter.physicalDescription}</textarea>
                <label htmlFor="personality-description">Personality</label>
                <textarea id="personality-description" readOnly>{selectedCharacter.personality}</textarea>
                <label htmlFor="ideals">Ideals</label>
                <textarea id="ideals" readOnly>{selectedCharacter.ideals}</textarea>
                <label htmlFor="bonds">Bonds</label>
                <textarea id="bonds" readOnly>{selectedCharacter.bonds}</textarea>
                <label htmlFor="flaws">Flaws</label>
                <textarea id="flaws" readOnly>{selectedCharacter.flaws}</textarea>
            </div>
        </div>
        
    )
}