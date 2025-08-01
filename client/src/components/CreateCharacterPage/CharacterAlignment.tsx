import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks"
import { setAlignment } from "../../lib/redux/newCharacterSlice";

export default function() {
    const characterAlignment = useAppSelector((state) => state.selectedCharacter.alignment);
    const dispatch = useAppDispatch();
    
    const handleAlignmentChange = (newAlignment: string) => {
        dispatch(setAlignment(newAlignment));
    }

    return (
        <div>
            <h2>Alignment</h2>
            <div id="alignment-options">
                <label htmlFor="lawful-good">Lawful Good</label>
                <input id="lawful-good" type="radio" name="alignment" checked={characterAlignment == "lawful good"} onChange={() => handleAlignmentChange("lawful good")} />
                <label htmlFor="neutral-good">Neutral Good</label>
                <input id="neutral-good" type="radio" name="alignment" checked={characterAlignment == "neutral good"} onChange={() => handleAlignmentChange("netural good")} />
                <label htmlFor="chaotic-good">Chaotic Good</label>
                <input id="chaotic-good" type="radio" name="alignment" checked={characterAlignment == "chaotic good"} onChange={() => handleAlignmentChange("chaotic good")} />
                <label htmlFor="lawful-neutral">Lawful Neutral</label>
                <input id="lawful-neutral" type="radio" name="alignment" checked={characterAlignment == "lawful neutral"} onChange={() => handleAlignmentChange("lawful neutral")} />
                <label htmlFor="true-neutral">True Neutral</label>
                <input id="true-neutral" type="radio" name="alignment" checked={characterAlignment == "true neutral"} onChange={() => handleAlignmentChange("true neutral")} />
                <label htmlFor="chaotic-neutral">Chaotic Neutral</label>
                <input id="chaotic-neutral" type="radio" name="alignment" checked={characterAlignment == "chaotic neutral"} onChange={() => handleAlignmentChange("chaotic neutral")} />
                <label htmlFor="lawful-evil">Lawful Evil</label>
                <input id="lawful-evil" type="radio" name="alignment" checked={characterAlignment == "lawful evil"} onChange={() => handleAlignmentChange("lawful evil")} />
                <label htmlFor="neutral-evil">Neutral Evil</label>
                <input id="neutral-evil" type="radio" name="alignment" checked={characterAlignment == "neutral evil"} onChange={() => handleAlignmentChange("neutral evil")} />
                <label htmlFor="chaotic-evil">Chaotic Evil</label>
                <input id="chaotic-evil" type="radio" name="alignment" checked={characterAlignment == "chaotic evil"} onChange={() => handleAlignmentChange("chaotic evil")} />
                <label htmlFor="unaligned">Unaligned</label>
                <input id="unaligned" type="radio" name="alignment" checked={characterAlignment == "unaligned"} onChange={() => handleAlignmentChange("unaligned")} />
            </div>
        </div>
    )
}