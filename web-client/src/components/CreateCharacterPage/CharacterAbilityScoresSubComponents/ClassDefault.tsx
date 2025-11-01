import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { setCharacterClassDefinition, setScoresToClassDefault } from "../../../lib/redux/selectedCharacterSlice";

const ClassDefault = () => {
    const scores = useAppSelector((state) => state.selectedCharacter.scores);
    const defaultClass = useAppSelector((state) => state.dmTools.characterClassDefinitions[0]);
    const characterClassBase = useAppSelector((state) => state.selectedCharacter.characterClassInstances[0].definition);
    const plusTwoBonus = useAppSelector((state) => state.selectedCharacter.backgroundInstance?.abilityScoreDefinitionPlusTwo ?? null);
    const plusOneBonus = useAppSelector((state) => state.selectedCharacter.backgroundInstance?.abilityScoreDefinitionPlusOne ?? null);
    const dispatch = useAppDispatch();

    if (!characterClassBase || !scores) {
        dispatch(setCharacterClassDefinition(defaultClass));
        dispatch(setScoresToClassDefault([defaultClass.defaultStr, defaultClass.defaultDex, defaultClass.defaultCon, defaultClass.defaultInt, defaultClass.defaultWis, defaultClass.defaultCha]));
    }
    
    useLayoutEffect(() => {
        dispatch(setScoresToClassDefault());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <div id="class-default-display">
            <h4>Class Default</h4>
            <div id="class-default">
                {Object.keys(scores).map((key) => {
                    return (
                        <div key={`$default-${key}`}>
                            <p>
                                {`${scores[key].definition.name}: ${scores[key].score}`}
                                {
                                    plusTwoBonus?.id == scores[key].definition.id ?
                                        <span className="font-bold">{" +2"}</span>
                                    : plusOneBonus?.id == scores[key].definition.id ?
                                        <span className="font-bold">{" +1"}</span>
                                        : <></>
                                }
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ClassDefault;
