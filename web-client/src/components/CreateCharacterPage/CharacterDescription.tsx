import traitGenerator from "../../lib/dm-tools/traitGenerator";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks"
import { setBonds, setFlaws, setIdeals, setName, setPersonality, setPhysicalDescription, setTraits } from "../../lib/redux/selectedCharacterSlice";

const CharacterDesciption = ({className = ""}: {className?: string}) => {
    const name = useAppSelector((state) => state.selectedCharacter.name);
    const scores = useAppSelector((state) => state.selectedCharacter.scores);
    const plusTwoBonus = useAppSelector((state) => state.selectedCharacter.backgroundInstance?.abilityScoreDefinitionPlusTwo);
    const plusOneBonus = useAppSelector((state) => state.selectedCharacter.backgroundInstance?.abilityScoreDefinitionPlusOne);
    const physicalDescription = useAppSelector((state) => state.selectedCharacter.physicalDescription);
    const personality = useAppSelector((state) => state.selectedCharacter.personality);
    const ideals = useAppSelector((state) => state.selectedCharacter.ideals);
    const bonds = useAppSelector((state) => state.selectedCharacter.bonds);
    const flaws = useAppSelector((state) => state.selectedCharacter.flaws);
    const dispatch = useAppDispatch();
    
    const handleRandomizeTraits = () => {
        dispatch(setTraits(traitGenerator(scores, [plusTwoBonus?.abbreviation ?? "", plusOneBonus?.abbreviation ?? ""])));
    };

    return (
        <div id="character-description-page" className={className}>
            <div className="section-header">
                <h2>Description</h2>
            </div>
            <div className="section-display">
                <div id="character-descriptions" className="flex flex-col gap-3">
                    <div id="character-name-div" className="flex flex-col items-start gap-1">
                        <label htmlFor="character-name">Name</label>
                        <input className="text-input" id="character-name" placeholder="Enter your character's name..." value={name} onChange={(e) => dispatch(setName(e.target.value))} /> 
                    </div>
                    <div id="traits" className="flex flex-col gap-2">
                        <div id="physical-description-div" className="flex flex-col items-start gap-1">
                            <label htmlFor="physical">Physical Traits</label>
                            <textarea className="text-input" id="physical" placeholder="Describe your appearance..." value={physicalDescription} onChange={(e) => dispatch(setPhysicalDescription(e.target.value))} />
                        </div>
                        <div id="personality-desciption-div" className="flex flex-col items-start gap-1">
                            <label htmlFor="personality">Personality Traits</label>
                            <textarea className="text-input" id="personality" placeholder="Describe your personality..." value={personality} onChange={(e) => dispatch(setPersonality(e.target.value))} />
                        </div>
                        <button className="btn btn-tertiary" onClick={handleRandomizeTraits}>Randomize Traits</button>

                    </div>
                    <div id="character-flesh-out">
                        <div id="ideals-div" className="flex flex-col items-start gap-1">
                            <label htmlFor="ideals">Ideals</label>
                            <input className="text-input" id="ideals" placeholder="List your ideals..." value={ideals} onChange={(e) => dispatch(setIdeals(e.target.value))} />
                        </div>
                        <div id="bonds-div" className="flex flex-col items-start gap-1">
                            <label htmlFor="bonds">Bonds</label>
                            <input className="text-input" id="bonds" placeholder="List your bonds..." value={bonds} onChange={(e) => dispatch(setBonds(e.target.value))} />
                        </div>
                        <div id="flaws-div" className="flex flex-col items-start gap-1">
                            <label htmlFor="flaws">Flaws</label>
                            <input className="text-input" id="flaws" placeholder="List your flaws..." value={flaws} onChange={(e) => dispatch(setFlaws(e.target.value))} />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CharacterDesciption;
