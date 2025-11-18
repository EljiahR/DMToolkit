import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import { setBackgroundDefinition, setBackgroundItemSet } from "../../lib/redux/selectedCharacterSlice";
import { printItemSet } from "../../lib/dm-tools/stringFunctions";
import CreateCharacterFeatDisplay from "./CreateCharacterFeatDisplay";

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
                <hr />
                <div id="background-feat">
                    {selectedBackgroundDefinition.featDefinition &&
                        <CreateCharacterFeatDisplay feat={selectedBackgroundDefinition.featDefinition} />
                    }
                </div>
                <hr />
                <div id="item-sets">
                    <p className="font-bold">Item sets</p>
                    <div id="item-set-radios" className="flex flex-col gap-3 justify-center">
                        <div id="item-set-a-div" className="item-set-div">
                            <input type="radio" name="item-set" id="item-set-a" checked={selectedItemSet} onChange={() => handleItemSetSelection(true)} />
                            <label htmlFor="item-set-a" className={selectedItemSet ? "selected-item-set" : ""}>{printItemSet(selectedBackgroundDefinition.itemDefinitionBaseQuantities)}</label>
                        </div>
                        <div id="item-set-b-div" className="item-set-div">
                            <input type="radio" name="item-set" id="item-set-b" checked={!selectedItemSet} onChange={() => handleItemSetSelection(false)} />
                            <label htmlFor="item-set-b" className={`${!selectedItemSet ? "selected-item-set" : ""}`}>{selectedBackgroundDefinition.startingGp} GP</label>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default CharacterBackground;
