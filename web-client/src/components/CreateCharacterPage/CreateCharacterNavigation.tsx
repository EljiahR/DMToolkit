import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks"
import { CharacterCreationNavigationOptions } from "../../lib/redux/types";
import { decreaseCharacterCreationIndex, increaseCharacterCreationIndex, selectCharacterCreationIndex } from "../../lib/redux/uiSlice"

export default function({ className}: {className?: string}) {
    const sectionIndex = useAppSelector(selectCharacterCreationIndex);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleIndexIncrease = () => {
        if (sectionIndex < 6) {
            dispatch(increaseCharacterCreationIndex());
        } else {
            navigate("/character-display");
        }
    }
    const handleIndexDecrease = () => dispatch(decreaseCharacterCreationIndex());

    return (
        <div id="section-nav" className={className + " grid " + (sectionIndex > 0 ? "grid-cols-2" : "grid-cols-1")}>
            {sectionIndex > 0 && 
                <button onClick={handleIndexDecrease}>&larr; {CharacterCreationNavigationOptions[sectionIndex - 1]}</button>
            }
            {sectionIndex < 7 &&
                <button onClick={handleIndexIncrease} className={sectionIndex > 0 ? "col-start-2" : ""}>{sectionIndex > 0 ? CharacterCreationNavigationOptions[sectionIndex + 1] : "Start"} &rarr;</button>
            }
        </div>
    )
}