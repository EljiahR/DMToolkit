import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import { setBackgroundBase } from "../../lib/redux/newCharacterSlice";

export default function() {
    const backgrounds = useAppSelector((state) => state.dmTools.backgrounds);
    const selectedBackground = useAppSelector((state) => state.newCharacter.backgroundBase);
    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        if (backgrounds.length < 1) {
            // TODO: Error handling
        }
        
        if (selectedBackground == null) {
            dispatch(setBackgroundBase(backgrounds[0]));
        }
    });

    const handleBackgroundChange = (backgroundId: string) => {
        const newBackground = backgrounds.find((background) => background.id === backgroundId);

        if (newBackground == undefined) {
            // TODO: Error handling
        }

        dispatch(setBackgroundBase(newBackground!));
    }

    return (
        <div>
            <h2>Background</h2>
            <label htmlFor="background-selection">Choose a background</label>
            <select id="background-selection" value={selectedBackground ? selectedBackground.id : ""} onChange={(e) => handleBackgroundChange(e.target.value)}>
                {backgrounds.map((background) => {
                    return (
                        <option key={`background=${background.id}`} value={background.id}>{background.name}</option>
                    )
                })}
            </select>
            {selectedBackground &&
            <div>
                <h3>{selectedBackground.name}</h3>
                <p>{selectedBackground.description}</p>
            </div>
            }
        </div>
    )
}