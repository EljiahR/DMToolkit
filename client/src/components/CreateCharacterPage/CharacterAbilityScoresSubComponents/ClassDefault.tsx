import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { setCharacterClassBase, setScoresToClassDefault } from "../../../lib/redux/selectedCharacterSlice";

export default function() {
    const scores = useAppSelector((state) => state.selectedCharacter.scores);
    const defaultClass = useAppSelector((state) => state.dmTools.characterClasses[0]);
    const characterClass = useAppSelector((state) => state.selectedCharacter.characterClassBase);
    const dispatch = useAppDispatch();

    if (!characterClass || !scores) {
        dispatch(setCharacterClassBase(defaultClass));
        dispatch(setScoresToClassDefault(defaultClass.defaultScoreArray));
    }
    
    useLayoutEffect(() => {
        dispatch(setScoresToClassDefault());
    }, []);
    
    return (
        <div id="class-default-display">
            <h3>Class Default</h3>
            <div id="class-default">
                {Object.keys(scores).map((key) => {
                    return (
                        <div key={`$default-${key}`}>
                            <p>{`${scores[key].name}: ${scores[key].bonus > 0 ? `${scores[key].amount} +${scores[key].bonus}` : scores[key].amount}`}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}