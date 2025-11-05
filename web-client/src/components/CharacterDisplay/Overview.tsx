import { useAppSelector } from "../../lib/redux/hooks"

const Overview = () => {
    const selectedCharacter = useAppSelector((state) => state.selectedCharacter);    
    
    return (
        <div id="character-overview-page">
            <div id="basic-overview">
                <h3>{selectedCharacter.name}</h3>
                <p>{selectedCharacter.characterClassInstances[0].definition.name}</p>
            </div>
            <div id="origin">
                <p>{selectedCharacter.speciesInstance?.definition.name ?? ""}</p>
                <p>{selectedCharacter.backgroundInstance?.definition.name ?? ""}</p>
            </div>
            <div id="alignment">
                <p>{selectedCharacter.alignment}</p>
            </div>
            <div id="descriptions">
                <label htmlFor="physical-description">Physical</label>
                <textarea id="physical-description" value={selectedCharacter.physicalDescription} readOnly />
                <label htmlFor="personality-description">Personality</label>
                <textarea id="personality-description" value={selectedCharacter.personality} readOnly />
                <label htmlFor="ideals">Ideals</label>
                <textarea id="ideals" value={selectedCharacter.ideals} readOnly />
                <label htmlFor="bonds">Bonds</label>
                <textarea id="bonds" value={selectedCharacter.bonds} readOnly />
                <label htmlFor="flaws">Flaws</label>
                <textarea id="flaws" value={selectedCharacter.flaws} readOnly />
            </div>
        </div>
        
    )
}

export default Overview;
