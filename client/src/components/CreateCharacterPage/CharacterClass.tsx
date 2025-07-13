import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks"
import { setCharacterClassBase } from "../../lib/redux/newCharacterSlice";


export default function() {
    const selectedClass = useAppSelector((state) => state.newCharacter.characterClassBase);
    const dispatch = useAppDispatch();
    
    useLayoutEffect(() => {
        if (selectedClass == null) {
            dispatch(setCharacterClassBase())
        }
    });

    return (
        <div>
            <h2>Class</h2>
            <label htmlFor="class-selector">Select a class</label>
            <select id="class-selector" value={selectedClass.id} onChange={(e) => setSelectedClassId(e.target.value)}>
                {classes.map((characterClass) => {
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