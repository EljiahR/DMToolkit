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
        <div id="character-class-page" className={className}>
            <div className="section-header">
                <h2>Class</h2>
                <p>Small description describing what exactly a class represents.</p>
                <div id="class-selection" className="section-selection">
                    <label htmlFor="class-selector" className="self-center">Select a class</label>
                    <select id="class-selector" value={selectedCharacterClassDefinition ? selectedCharacterClassDefinition.id : ""} onChange={(e) => handleClassSelection(e.target.value)} className="selector">
                        {availableCharacterClasses.map((characterClass) => {
                            return (
                                <option key={`class-${characterClass.id}`} value={characterClass.id}>{characterClass.name}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            
            
            
            {selectedCharacterClassDefinition &&
            <div id="class-display" className="section-display">
                <h2>{selectedCharacterClassDefinition.name}</h2>
                <p>{selectedCharacterClassDefinition.description}</p>
                <div id="item-sets">
                    <p>Item sets:</p>
                    <p><span className={selectedItemSet ? "selected-item-set" : ""} onClick={() => handleItemSetSelection(true)}>{"(A)"} {printItemSet(selectedCharacterClassDefinition.itemDefinitionBaseQuantities)}</span>, or <span className={!selectedItemSet ? "selected-item-set" : ""} onClick={() => handleItemSetSelection(false)}>{"(B)"} {selectedCharacterClassDefinition.startingGp} GP</span></p>
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

export default CharacterClass;
