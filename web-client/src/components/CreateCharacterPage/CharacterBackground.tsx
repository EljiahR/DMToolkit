import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import { setBackgroundDefinition, setBackgroundItemSet } from "../../lib/redux/selectedCharacterSlice";
import { printItemSet } from "../../lib/dm-tools/stringFunctions";

const CharacterBackground = ({className = ""}: {className?: string}) => {
    const backgrounds = useAppSelector((state) => state.dmTools.backgroundDefinitions);
    const selectedBackgroundDefinition = useAppSelector((state) => state.selectedCharacter.backgroundInstance?.definition ?? null);
    const selectedItemSet = useAppSelector((state) => state.selectedCharacter.backgroundInstance?.selectedItemSet ?? false);
    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        if (backgrounds.length < 1) {
            // TODO: Error handling
        }
        
        if ((selectedBackgroundDefinition == null || selectedBackgroundDefinition.id == "default") && backgrounds.length > 0) {
            dispatch(setBackgroundDefinition(backgrounds[0]));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleBackgroundChange = (backgroundId: string) => {
        const newBackground = backgrounds.find((background) => background.id === backgroundId);

        if (newBackground == undefined) {
            // TODO: Error handling
        }

        dispatch(setBackgroundDefinition(newBackground!));
    }

    const handleItemSetSelection = (itemSetSelected: boolean) => {
        dispatch(setBackgroundItemSet(itemSetSelected));
    }

    return (
        <div id="background-page" className={className}>
            <div className="section-header">
                <h2>Background</h2>
                <div id="background-selection" className="section-selection">
                    <label htmlFor="background-selector">Choose a background</label>
                    <select id="background-selector" value={selectedBackgroundDefinition ? selectedBackgroundDefinition.id : ""} onChange={(e) => handleBackgroundChange(e.target.value)}>
                        {backgrounds.map((background) => {
                            return (
                                <option key={`background=${background.id}`} value={background.id}>{background.name}</option>
                            )
                        })}
                    </select>
                </div>
                
            </div>
            
            {selectedBackgroundDefinition &&
            <div id="selected-background-display" className="section-display">
                <h2>{selectedBackgroundDefinition.name}</h2>
                <p>{selectedBackgroundDefinition.description}</p>
                <div id="item-sets">
                    <p>Item sets:</p>
                    <p><span className={selectedItemSet ? "selected-item-set" : ""} onClick={() => handleItemSetSelection(true)}>{"(A)"} {printItemSet(selectedBackgroundDefinition.itemDefinitionBaseQuantities)}</span>, or <span className={!selectedItemSet ? "selected-item-set" : ""} onClick={() => handleItemSetSelection(false)}>{"(B)"} {selectedBackgroundDefinition.startingGp} GP</span></p>
                    <div id="item-set-radios" className="flex gap-1 justify-center">
                        <label htmlFor="item-set-a">A</label>
                        <input type="radio" name="item-set" id="item-set-a" checked={selectedItemSet} onChange={() => handleItemSetSelection(true)} />
                        <label htmlFor="item-set-b">B</label>
                        <input type="radio" name="item-set" id="item-set-b" checked={!selectedItemSet} onChange={() => handleItemSetSelection(false)} />
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default CharacterBackground;
