import type { CharacterClass } from "../../lib/types/dmToolTypes"

interface Props {
    classes: CharacterClass[];
    selectedClass: number;
    setSelectedClass: (newClass: number) => void;
}

export default function({ classes, selectedClass, setSelectedClass }: Props) {
    return (
        <div>
            <h2>Class</h2>
            <label htmlFor="class-selector">Select a class</label>
            <select id="class-selector" value={selectedClass} onChange={(e) => setSelectedClass(parseInt(e.target.value))}>
                {classes.map((characterClass, index) => {
                    return (
                        <option key={`class-${index}`} value={index}>{characterClass.name}</option>
                    )
                })}
            </select>
            <div id="class-display">
                <h3>{classes[selectedClass].name}</h3>
                <p>{classes[selectedClass].description}</p>
            </div>
        </div>
    )
}