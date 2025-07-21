import traitGenerator from "../../lib/dm-tools/traitGenerator";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks"
import { setBonds, setFlaws, setIdeals, setName, setPersonality, setPhysicalDescription, setTraits } from "../../lib/redux/newCharacterSlice";

export default function() {
    const name = useAppSelector((state) => state.newCharacter.name);
    const scores = useAppSelector((state) => state.newCharacter.scores);
    const physicalDescription = useAppSelector((state) => state.newCharacter.physicalDescription);
    const personality = useAppSelector((state) => state.newCharacter.personality);
    const ideals = useAppSelector((state) => state.newCharacter.ideals);
    const bonds = useAppSelector((state) => state.newCharacter.bonds);
    const flaws = useAppSelector((state) => state.newCharacter.flaws);
    const dispatch = useAppDispatch();
    
    const handleRandomizeTraits = () => {
        dispatch(setTraits(traitGenerator(scores)));
    };

    return (
        <div>
            <h2>Describe your character</h2>
            <div id="character-descriptions">
                <label htmlFor="character-name">Name</label>
                <input id="character-name" placeholder="Enter your character's name..." value={name} onChange={(e) => dispatch(setName(e.target.value))} />
                <div id="traits">
                    <button onClick={handleRandomizeTraits}>Randomize Traits</button>
                    <label htmlFor="physical">Physical Traits</label>
                    <input id="physical" placeholder="Describe your appearance..." value={physicalDescription} onChange={(e) => dispatch(setPhysicalDescription(e.target.value))} />
                    <label htmlFor="personality">Personality Traits</label>
                    <input id="personality" placeholder="Describe your personality..." value={personality} onChange={(e) => dispatch(setPersonality(e.target.value))} />
                </div>
                <div id="character-flesh-out">
                    <label htmlFor="ideals">Ideals</label>
                    <input id="ideals" placeholder="List your ideals..." value={ideals} onChange={(e) => dispatch(setIdeals(e.target.value))} />
                    <label htmlFor="bonds">Bonds</label>
                    <input id="bonds" placeholder="List your bonds..." value={bonds} onChange={(e) => dispatch(setBonds(e.target.value))} />
                    <label htmlFor="flaws">Flaws</label>
                    <input id="flaws" placeholder="List your flaws..." value={flaws} onChange={(e) => dispatch(setFlaws(e.target.value))} />
                </div>
            </div>
        </div>
    )
}