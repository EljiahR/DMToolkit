import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { setCharacterClassBase, setScoresToClassDefault } from "../../../lib/redux/selectedCharacterSlice";

export default function() {
    const scores = useAppSelector((state) => state.selectedCharacter.scores);
    const defaultClass = useAppSelector((state) => state.dmTools.characterClassDefinitions[0]);
    const characterClassBase = useAppSelector((state) => state.selectedCharacter.characterClass.base);
    const bonuses = useAppSelector((state) => state.selectedCharacter.background.abilityScores);
    const dispatch = useAppDispatch();

    if (!characterClassBase || !scores) {
        dispatch(setCharacterClassBase(defaultClass));
        dispatch(setScoresToClassDefault([defaultClass.defaultStr, defaultClass.defaultDex, defaultClass.defaultCon, defaultClass.defaultInt, defaultClass.defaultWis, defaultClass.defaultCha]));
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
                            <p>{`${scores[key].definition.name}: ${bonuses.includes(key) ? `${scores[key].amount} +${2 - bonuses.indexOf(key)}` : scores[key].amount}`}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}