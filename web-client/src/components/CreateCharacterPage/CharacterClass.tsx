import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks"
import { setCharacterClassDefinition, setCharacterClassItemSet } from "../../lib/redux/selectedCharacterSlice";
import { printItemSet } from "../../lib/dm-tools/stringFunctions";


const CharacterClass = ({className = ""}: {className?: string}) => {
    const availableCharacterClasses = useAppSelector((state) => state.dmTools.characterClassDefinitions);
    const selectedCharacterClassDefinition = useAppSelector((state) => state.selectedCharacter.characterClassInstances[0].definition);
    const selectedItemSet = useAppSelector((state) => state.selectedCharacter.characterClassInstances[0].selectedItemSet ?? true);
    const dispatch = useAppDispatch();
    
    useLayoutEffect(() => {
        if (availableCharacterClasses.length < 1) {
            // throw error or return to homepage not sure yet :)
        }
        
        if ((selectedCharacterClassDefinition == null || selectedCharacterClassDefinition.id == "default") && availableCharacterClasses.length > 0) {
            dispatch(setCharacterClassDefinition(availableCharacterClasses[0]));
        }
    });

    const handleClassSelection = (classId: string) => {
        const newClass = availableCharacterClasses.find((characterClass) => characterClass.id === classId);

        if (newClass == undefined) {
            // MORE ERROR HANDLING
        }

        dispatch(setCharacterClassDefinition(newClass!));
    }

    const handleItemSetSelection = (selectedItemSet: boolean) => {
        dispatch(setCharacterClassItemSet(selectedItemSet));
    }

    return (
        <div className={className}>
            <h2>Class</h2>
            <label htmlFor="class-selector">Select a class</label>
            <select id="class-selector" value={selectedCharacterClassDefinition ? selectedCharacterClassDefinition.id : ""} onChange={(e) => handleClassSelection(e.target.value)} className="selector">
                {availableCharacterClasses.map((characterClass) => {
                    return (
                        <option key={`class-${characterClass.id}`} value={characterClass.id}>{characterClass.name}</option>
                    )
                })}
            </select>
            {selectedCharacterClassDefinition &&
            <div id="class-display">
                <h3>{selectedCharacterClassDefinition.name}</h3>
                <p>{selectedCharacterClassDefinition.description}</p>
                <div>
                    <p>Item set:</p>
                    <p>{"(A)"} {printItemSet(selectedCharacterClassDefinition.itemDefinitionBaseQuantities)}, or {"(B)"} {selectedCharacterClassDefinition.startingGp}GP</p>
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

export default CharacterClass;
