import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks"
import { CharacterCreationNavigationOptions } from "../../lib/redux/types";
import { decreaseCharacterCreationIndex, increaseCharacterCreationIndex, selectCharacterCreationIndex } from "../../lib/redux/uiSlice"
import { setNewCharacterInventory } from "../../lib/redux/selectedCharacterSlice";

const CreateCharacterNavigation = ({ className}: {className?: string}) => {
    const sectionIndex = useAppSelector(selectCharacterCreationIndex);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleIndexIncrease = () => {
        if (sectionIndex < 6) {
            dispatch(increaseCharacterCreationIndex());
        } else {
            dispatch(setNewCharacterInventory());
            navigate("/character-display");
        }
    }
    const handleIndexDecrease = () => dispatch(decreaseCharacterCreationIndex());

    return (
        <div id="section-nav" className={className + " grid gap-1 " + (sectionIndex > 0 ? "grid-cols-2" : "grid-cols-1")}>
            {sectionIndex > 0 && 
                <button onClick={handleIndexDecrease} className="btn btn-white">&larr; {CharacterCreationNavigationOptions[sectionIndex - 1]}</button>
            }
            {sectionIndex < 7 &&
                <button onClick={handleIndexIncrease} className={"btn btn-white " + (sectionIndex > 0 ? "col-start-2" : "")}>{sectionIndex > 0 ? CharacterCreationNavigationOptions[sectionIndex + 1] : "Start"} &rarr;</button>
            }
        </div>
    )
}

export default CreateCharacterNavigation;
