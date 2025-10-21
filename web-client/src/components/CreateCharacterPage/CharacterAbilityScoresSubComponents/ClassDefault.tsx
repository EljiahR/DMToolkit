import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { setCharacterClassDefinition, setScoresToClassDefault } from "../../../lib/redux/selectedCharacterSlice";

export default function() {
    const scores = useAppSelector((state) => state.selectedCharacter.scores);
    const defaultClass = useAppSelector((state) => state.dmTools.characterClassDefinitions[0]);
    const characterClassBase = useAppSelector((state) => state.selectedCharacter.characterClassInstances[0].definition);
    const plusTwoBonus = useAppSelector((state) => state.selectedCharacter.backgroundInstance?.abilityScoreDefinitionPlusTwo);
    const plusOneBonus = useAppSelector((state) => state.selectedCharacter.backgroundInstance?.abilityScoreDefinitionPlusOne);
    const dispatch = useAppDispatch();

    if (!characterClassBase || !scores) {
        dispatch(setCharacterClassDefinition(defaultClass));
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
                            <p>{`${scores[key].definition.name}: ${scores[key].score}${plusTwoBonus?.id == scores[key].id ? '+2' : plusOneBonus?.id == scores[key].id ? '+1' : ''}`}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}