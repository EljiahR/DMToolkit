import { useLayoutEffect, useState } from "react";
import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors, type DragEndEvent } from "@dnd-kit/core";
import { arraySwap, SortableContext, sortableKeyboardCoordinates, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { setScoresToStandard, swapScores } from "../../../lib/redux/selectedCharacterSlice";
import type { AbilityScoreAbbreviations } from "../../../lib/redux/types";
import type { AbilityScoreInstance } from "../../../lib/types/dm-tool-types/instances/abilityScoreInstance";

export default function() {
    const scores = useAppSelector((state) => state.selectedCharacter.scores);
    const plusTwoBonus = useAppSelector((state) => state.selectedCharacter.backgroundInstance?.abilityScoreDefinitionPlusTwo);
    const plusOneBonus = useAppSelector((state) => state.selectedCharacter.backgroundInstance?.abilityScoreDefinitionPlusOne);
    const dispatch = useAppDispatch();

    const [items, setItems] = useState<AbilityScoreAbbreviations[]>(["str", "dex", "con", "int", "wis", "cha"]);
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    useLayoutEffect(() => {
        dispatch(setScoresToStandard());
    }, []);

    const handleScoreSwap = (valueA: string, valueB: string) => {
        const scoreAbbreviationA = valueA as AbilityScoreAbbreviations;
        const scoreAbbreviationB = valueB as AbilityScoreAbbreviations;
        dispatch(swapScores({scoreAbbreviationA, scoreAbbreviationB}));
    }

    const handleDragEnd = (event: DragEndEvent) => {
        const {active, over} = event;
        if (over != null && active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id.toString() as AbilityScoreAbbreviations);
                const newIndex = items.indexOf(over.id.toString() as AbilityScoreAbbreviations);
                
                return arraySwap(items, oldIndex, newIndex);
            });

            handleScoreSwap(active.id.toString(), over.id.toString());
        }
    }
    
    return (
        <div id="standard-array-display">
            <h3>Standard Array</h3>
            <div id="standard-array">
                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <SortableContext items={items}>
                        {items.map(item => <SortableScore key={item} score={scores[item]} bonus={plusTwoBonus?.abbreviation == item ? 2 : plusOneBonus?.abbreviation == item ? 1 : 0} />)}
                    </SortableContext>
                </DndContext>
            </div>
        </div>
    )
}

interface SortableScoreProps {
    score: AbilityScoreInstance;
    bonus: number;
}

const SortableScore = ({ score, bonus }: SortableScoreProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: score.id});
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>{`${score.definition.name}: ${bonus > 0 ? `${score.score} +${bonus}` : score.score}`}</div>
    )
}