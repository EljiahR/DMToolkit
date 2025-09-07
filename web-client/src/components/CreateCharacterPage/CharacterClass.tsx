import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks"
import { setCharacterClassBase } from "../../lib/redux/selectedCharacterSlice";


export default function({className = ""}: {className?: string}) {
    const availableClasses = useAppSelector((state) => state.dmTools.characterClasses);
    const selectedClassBase = useAppSelector((state) => state.selectedCharacter.characterClass.base);
    const dispatch = useAppDispatch();
    
    useLayoutEffect(() => {
        if (availableClasses.length < 1) {
            // throw error or return to homepage not sure yet :)
        }
        
        if ((selectedClassBase == null || selectedClassBase.id == "default") && availableClasses.length > 0) {
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
        <div className={className}>
            <h2>Class</h2>
            <label htmlFor="class-selector">Select a class</label>
            <select id="class-selector" value={selectedClassBase ? selectedClassBase.id : ""} onChange={(e) => handleClassSelection(e.target.value)} className="selector">
                {availableClasses.map((characterClass) => {
                    return (
                        <option key={`class-${characterClass.id}`} value={characterClass.id}>{characterClass.name}</option>
                    )
                })}
            </select>
            {selectedClassBase &&
            <div id="class-display">
                <h3>{selectedClassBase.name}</h3>
                <p>{selectedClassBase.description}</p>
            </div>
            }
        </div>
    )
}