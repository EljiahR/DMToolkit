import { useState } from "react";
import type { AbilityScoreProps } from "../../../pages/CreatePlayerCharacterPage";
import { DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

export default function({ scores, handleScores }: AbilityScoreProps) {
    const [items, setItems] = useState(["str", "dex", "con", "int", "wis", "cha"]);
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );
    
    return (
        <div id="standard-array-display">
            <h3>Standard Array</h3>
            <div id="standard-array">
                <DndContext>
                    <SortableContext>
                        
                    </SortableContext>
                </DndContext>
            </div>
        </div>
    )
}