import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks"
import { setAlignment } from "../../lib/redux/selectedCharacterSlice";

const CharacterAlignment = ({className = ""}: {className?: string}) => {
    const characterAlignment = useAppSelector((state) => state.selectedCharacter.alignment);
    const dispatch = useAppDispatch();
    
    const handleAlignmentChange = (newAlignment: string) => {
        dispatch(setAlignment(newAlignment));
    }

    return (
        <div id="character-alignment-page" className={className}>
            <div className="section-header">
                <h2>Alignment</h2>
            </div>
            <div className="section-display">
                <div id="alignment-options" className="grid grid-cols-3 grid-rows-4 gap-1">
                    <div className="alignment-radio w-full">
                        <label htmlFor="lawful-good">Lawful Good</label>
                        <input id="lawful-good" type="radio" name="alignment" checked={characterAlignment == "lawful good"} onChange={() => handleAlignmentChange("lawful good")} />
                    </div>
                    <div className="alignment-radio">
                        <label htmlFor="neutral-good">Neutral Good</label>
                        <input id="neutral-good" type="radio" name="alignment" checked={characterAlignment == "neutral good"} onChange={() => handleAlignmentChange("neutral good")} />
                    </div>
                    <div className="alignment-radio">
                        <label htmlFor="chaotic-good">Chaotic Good</label>
                        <input id="chaotic-good" type="radio" name="alignment" checked={characterAlignment == "chaotic good"} onChange={() => handleAlignmentChange("chaotic good")} />
                    </div>
                    <div className="alignment-radio">
                        <label htmlFor="lawful-neutral">Lawful Neutral</label>
                        <input id="lawful-neutral" type="radio" name="alignment" checked={characterAlignment == "lawful neutral"} onChange={() => handleAlignmentChange("lawful neutral")} />
                    </div>
                    <div className="alignment-radio">
                        <label htmlFor="true-neutral">True Neutral</label>
                        <input id="true-neutral" type="radio" name="alignment" checked={characterAlignment == "true neutral"} onChange={() => handleAlignmentChange("true neutral")} />
                    </div>
                    <div className="alignment-radio">
                        <label htmlFor="chaotic-neutral">Chaotic Neutral</label>
                        <input id="chaotic-neutral" type="radio" name="alignment" checked={characterAlignment == "chaotic neutral"} onChange={() => handleAlignmentChange("chaotic neutral")} />
                    </div>
                    <div className="alignment-radio">
                        <label htmlFor="lawful-evil">Lawful Evil</label>
                        <input id="lawful-evil" type="radio" name="alignment" checked={characterAlignment == "lawful evil"} onChange={() => handleAlignmentChange("lawful evil")} />
                    </div>
                    <div className="alignment-radio">
                        <label htmlFor="neutral-evil">Neutral Evil</label>
                        <input id="neutral-evil" type="radio" name="alignment" checked={characterAlignment == "neutral evil"} onChange={() => handleAlignmentChange("neutral evil")} />
                    </div>
                    <div className="alignment-radio">
                        <label htmlFor="chaotic-evil">Chaotic Evil</label>
                        <input id="chaotic-evil" type="radio" name="alignment" checked={characterAlignment == "chaotic evil"} onChange={() => handleAlignmentChange("chaotic evil")} />
                    </div>
                    <div className="col-span-3 alignment-radio">
                        <label htmlFor="unaligned">Unaligned</label>
                        <input id="unaligned" type="radio" name="alignment" checked={characterAlignment == "unaligned"} onChange={() => handleAlignmentChange("unaligned")} />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CharacterAlignment;
