import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import { setBackgroundDefinition } from "../../lib/redux/selectedCharacterSlice";

export default function({className = ""}: {className?: string}) {
    const backgrounds = useAppSelector((state) => state.dmTools.backgroundDefinitions);
    const selectedBackgroundDefinition = useAppSelector((state) => state.selectedCharacter.backgroundInstance?.definition);
    const dispatch = useAppDispatch();

    console.log(backgrounds)

    useLayoutEffect(() => {
        if (backgrounds.length < 1) {
            // TODO: Error handling
        }
        
        if ((selectedBackgroundDefinition == null || selectedBackgroundDefinition.id == "default") && backgrounds.length > 0) {
            dispatch(setBackgroundDefinition(backgrounds[0]));
        }
    });

    const handleBackgroundChange = (backgroundId: string) => {
        const newBackground = backgrounds.find((background) => background.id === backgroundId);

        if (newBackground == undefined) {
            // TODO: Error handling
        }

        dispatch(setBackgroundDefinition(newBackground!));
    }

    return (
        <div className={className}>
            <h2>Background</h2>
            <label htmlFor="background-selection">Choose a background</label>
            <select id="background-selection" value={selectedBackgroundDefinition ? selectedBackgroundDefinition.id : ""} onChange={(e) => handleBackgroundChange(e.target.value)}>
                {backgrounds.map((background) => {
                    return (
                        <option key={`background=${background.id}`} value={background.id}>{background.name}</option>
                    )
                })}
            </select>
            {selectedBackgroundDefinition &&
            <div>
                <h3>{selectedBackgroundDefinition.name}</h3>
                <p>{selectedBackgroundDefinition.description}</p>
            </div>
            }
        </div>
    )
}