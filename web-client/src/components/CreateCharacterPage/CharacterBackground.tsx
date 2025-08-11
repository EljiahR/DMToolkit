import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import { setBackgroundBase } from "../../lib/redux/selectedCharacterSlice";

export default function() {
    const backgrounds = useAppSelector((state) => state.dmTools.backgrounds);
    const selectedBackgroundBase = useAppSelector((state) => state.selectedCharacter.background.base);
    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        if (backgrounds.length < 1) {
            // TODO: Error handling
        }
        
        if (selectedBackgroundBase == null || selectedBackgroundBase.id == "default") {
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
            <select id="background-selection" value={selectedBackgroundBase ? selectedBackgroundBase.id : ""} onChange={(e) => handleBackgroundChange(e.target.value)}>
                {backgrounds.map((background) => {
                    return (
                        <option key={`background=${background.id}`} value={background.id}>{background.name}</option>
                    )
                })}
            </select>
            {selectedBackgroundBase &&
            <div>
                <h3>{selectedBackgroundBase.name}</h3>
                <p>{selectedBackgroundBase.description}</p>
            </div>
            }
        </div>
    )
}