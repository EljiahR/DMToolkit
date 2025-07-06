import { useMemo } from "react";
import type { CharacterClassBase } from "../../lib/types/dmToolTypes"

interface Props {
    classes: CharacterClassBase[];
    selectedClassId: string;
    setSelectedClassId: (newClass: string) => void;
}

export default function({ classes, selectedClassId, setSelectedClassId }: Props) {
    const selectedClass = useMemo(() => {
        return classes.find(characterClass => characterClass.id == selectedClassId) ?? null;
    }, [selectedClassId]);
    
    return (
        <div>
            <h2>Class</h2>
            <label htmlFor="class-selector">Select a class</label>
            <select id="class-selector" value={selectedClassId} onChange={(e) => setSelectedClassId(e.target.value)}>
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