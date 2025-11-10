import { printProperCase } from "../../lib/dm-tools/stringFunctions";
import { useAppSelector } from "../../lib/redux/hooks"

const Overview = () => {
    const selectedCharacter = useAppSelector((state) => state.selectedCharacter); 
    const alignment = printProperCase(selectedCharacter.alignment);
    
    return (
        <div id="character-overview-page" className="flex flex-col gap-3 items-center">
            <div id="mechanical-description" className="card">
                <div id="basic-overview">
                    <h2>{selectedCharacter.name}</h2>
                    <p>{selectedCharacter.characterClassInstances[0].definition.name}</p>
                </div>
                <div id="origin">
                    <p>{selectedCharacter.speciesInstance?.definition.name ?? ""}</p>
                    <p>{selectedCharacter.backgroundInstance?.definition.name ?? ""}</p>
                </div>
                <div id="alignment">
                    <p>{alignment}</p>
                </div>
            </div>
           
            <div id="rp-description" className="card flex flex-col gap-1">
                <label htmlFor="physical-description">Physical</label>
                <textarea className="text-input" id="physical-description" value={selectedCharacter.physicalDescription} readOnly />
                <label htmlFor="personality-description">Personality</label>
                <textarea className="text-input" id="personality-description" value={selectedCharacter.personality} readOnly />
                <label htmlFor="ideals">Ideals</label>
                <textarea className="text-input"id="ideals" value={selectedCharacter.ideals} readOnly />
                <label htmlFor="bonds">Bonds</label>
                <textarea className="text-input" id="bonds" value={selectedCharacter.bonds} readOnly />
                <label htmlFor="flaws">Flaws</label>
                <textarea className="text-input" id="flaws" value={selectedCharacter.flaws} readOnly />
            </div>
        </div>
        
    )
}

export default Overview;
