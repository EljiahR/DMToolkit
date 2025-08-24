import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks"
import { CharacterCreationNavigationOptions } from "../../lib/redux/types";
import { decreaseCharacterCreationIndex, increaseCharacterCreationIndex, selectCharacterCreationIndex } from "../../lib/redux/uiSlice"

export default function() {
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
        <div id="section-nav">
            {sectionIndex > 0 && 
                <button onClick={handleIndexDecrease}>&larr; {CharacterCreationNavigationOptions[sectionIndex - 1]}</button>
            }
            {sectionIndex < 7 &&
                <button onClick={handleIndexIncrease}>{sectionIndex > 0 ? CharacterCreationNavigationOptions[sectionIndex + 1] : "Start"} &rarr;</button>
            }
        </div>
    )
}