import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks"
import { setCharacterClassDefinition, setCharacterClassItemSet } from "../../lib/redux/selectedCharacterSlice";
import { printItemSet } from "../../lib/dm-tools/stringFunctions";
import CreateCharacterFeatDisplay from "./CreateCharacterFeatDisplay";


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
                <hr />
                <div id="class-feats">
                    {selectedCharacterClassDefinition.featTables.map((table) => {
                        return (
                            <CreateCharacterFeatDisplay key={table.group + "-feat-group"} feat={table.featDefinitions[0]} />
                        )
                    })}
                </div>
                <hr />
                <div id="item-sets">
                    <p className="font-bold">Item sets</p>
                    <div id="item-set-radios" className="flex flex-col gap-3 justify-center">
                        <div className="item-set-div">
                            <input type="radio" name="item-set" id="item-set-a" checked={selectedItemSet} onChange={() => handleItemSetSelection(true)} />
                            <label className={selectedItemSet ? "selected-item-set" : ""} htmlFor="item-set-a">{printItemSet(selectedCharacterClassDefinition.startingEquipmentQuantityTables)}</label>
                        </div>
                        <div className="item-set-div">
                            <input type="radio" name="item-set" id="item-set-b" checked={!selectedItemSet} onChange={() => handleItemSetSelection(false)} />
                            <label className={!selectedItemSet ? "selected-item-set" : ""} htmlFor="item-set-b">{selectedCharacterClassDefinition.startingGp} GP</label>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default CharacterClass;
