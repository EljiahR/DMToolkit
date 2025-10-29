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
                <div>
                    <p>Item set:</p>
                    <p>{"(A)"} {printItemSet(selectedBackgroundDefinition.itemDefinitionBaseQuantities)}, or {"(B)"} {selectedBackgroundDefinition.startingGp}GP</p>
                    <div>
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
