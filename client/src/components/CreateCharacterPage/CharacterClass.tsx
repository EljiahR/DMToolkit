import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks"
import { setCharacterClassBase } from "../../lib/redux/newCharacterSlice";


export default function() {
    const availableClasses = useAppSelector((state) => state.dmTools.characterClasses);
    const selectedClass = useAppSelector((state) => state.selectedCharacter.characterClassBase);
    const dispatch = useAppDispatch();
    
    useLayoutEffect(() => {
        if (availableClasses.length < 1) {
            // throw error or return to homepage not sure yet :)
        }
        
        if (selectedClass == null) {
            dispatch(setCharacterClassBase(availableClasses[0]));
        }
    });

    const handleClassSelection = (classId: string) => {
        const newClass = availableClasses.find((characterClass) => characterClass.id === classId);

        if (newClass == undefined) {
            // MORE ERROR HANDLING
        }

        dispatch(setCharacterClassBase(newClass!));
    }

    return (
        <div>
            <h2>Class</h2>
            <label htmlFor="class-selector">Select a class</label>
            <select id="class-selector" value={selectedClass ? selectedClass.id : ""} onChange={(e) => handleClassSelection(e.target.value)}>
                {availableClasses.map((characterClass) => {
                    return (
                        <option key={`class-${characterClass.id}`} value={characterClass.id}>{characterClass.name}</option>
                    )
                })}
            </select>
            {selectedClass &&
            <div id="class-display">
                <h3>{selectedClass.name}</h3>
                <p>{selectedClass.description}</p>
            </div>
            }
        </div>
    )
}