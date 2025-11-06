import { useLayoutEffect, useState } from "react";
import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors, type DragEndEvent, type DragStartEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { setScoresToStandard, shiftStandardScores } from "../../../lib/redux/selectedCharacterSlice";
import DraggableIcon from "../../../assets/draggable-svgrepo-com.svg?react";
import type { AbilityScoreAbbreviations } from "../../../lib/redux/types";
import type { AbilityScoreInstance } from "../../../lib/types/dm-tool-types/instances/abilityScoreInstance";
import { ScoreAbbreviationsToString } from "../../../lib/dm-tools/staticElements";

const StandardArray = () => {
    const scores = useAppSelector((state) => state.selectedCharacter.scores);
    const plusTwoBonus = useAppSelector((state) => state.selectedCharacter.backgroundInstance?.abilityScoreDefinitionPlusTwo ?? null);
    const plusOneBonus = useAppSelector((state) => state.selectedCharacter.backgroundInstance?.abilityScoreDefinitionPlusOne ?? null);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const handleScoreSwap = (valueA: string, valueB: string) => {
    //     const scoreAbbreviationA = valueA as AbilityScoreAbbreviations;
    //     const scoreAbbreviationB = valueB as AbilityScoreAbbreviations;
    //     dispatch(swapScores({scoreAbbreviationA, scoreAbbreviationB}));
    // }

    const handleScoreChange = (valueA: string, valueB: string) => {
        const scoreAbbreviationA = valueA as AbilityScoreAbbreviations;
        const scoreAbbreviationB = valueB as AbilityScoreAbbreviations;
        dispatch(shiftStandardScores({scoreAbbreviationA, scoreAbbreviationB}))
    }

    const handleDragEnd = (event: DragEndEvent) => {
        const {active, over} = event;
        const draggedDiv = document.getElementById("sortable-" + ScoreAbbreviationsToString[active.id.toString() as AbilityScoreAbbreviations]);
        if (draggedDiv && draggedDiv.classList.contains("dragged-div")) {
            draggedDiv.classList.remove("dragged-div");
        }
        if (over != null && active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id.toString() as AbilityScoreAbbreviations);
                const newIndex = items.indexOf(over.id.toString() as AbilityScoreAbbreviations);
                
                return arrayMove(items, oldIndex, newIndex);
            });

            // handleScoreSwap(active.id.toString(), over.id.toString());
            handleScoreChange(active.id.toString(), over.id.toString());
        }
    }

    const handleDragStart = (event: DragStartEvent) => {
        const { active } = event;
        const draggedDiv = document.getElementById("sortable-" + ScoreAbbreviationsToString[active.id.toString() as AbilityScoreAbbreviations]);
        draggedDiv?.classList.add("dragged-div");
    }
    
    return (
        <div id="standard-array-display" className="flex flex-col gap-3">
            <h3>Standard Array</h3>
            <div id="standard-array" className="flex flex-col gap-1 px-3">
                {/* <BrowserView> */}
                    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
                        <SortableContext items={items}>
                            {items.map(item => <SortableScore key={item} score={scores[item]} bonus={plusTwoBonus?.abbreviation == item ? 2 : plusOneBonus?.abbreviation == item ? 1 : 0} />)}
                        </SortableContext>
                    </DndContext>
                {/* </BrowserView> */}
                {/* <MobileView>
                    {orderedItems.map(item => <TappableScore key={item} score={scores[item]} bonus={plusTwoBonus?.abbreviation == item ? 2 : plusOneBonus?.abbreviation == item ? 1 : 0} handleOnClick={handleOnClick} />)}
                </MobileView> */}
            </div>
        </div>
    )
}

interface ScoreProps {
    score: AbilityScoreInstance;
    bonus: number;
}

const SortableScore = ({ score, bonus }: ScoreProps) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: score.id});
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    return (
        <div id={`sortable-${score.definition.name}`} ref={setNodeRef} style={style} {...attributes} {...listeners} className="touch-none p-1 flex items-center justify-center border rounded bg-white shadow-sm draggable-div">
            <DraggableIcon className="h-5 w-5" />
            <p>
                {`${score.definition.name}: ${score.score}`}
                {bonus > 0 &&
                    <span className="font-bold">{` +${bonus}`}</span>
                }
            </p>
        </div>
    )
}

export default StandardArray;
