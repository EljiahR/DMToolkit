import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks"
import { setBackgroundDefinition, setBackgroundScores } from "../../../lib/redux/selectedCharacterSlice";
import type { ZeroOrOne } from "../../../lib/types/miscTypes";
import type { AbilityScoreAbbreviations } from "../../../lib/redux/types";

const BonusAbilityScore = () => {
    const dispatch = useAppDispatch();
    const allBackgrounds = useAppSelector((state) => state.dmTools.backgroundDefinitions);
    const backgroundDefinition = useAppSelector((state) => state.selectedCharacter.backgroundInstance?.definition ?? null);
    const playerScores = useAppSelector((state) => state.selectedCharacter.scores);
    const plusTwoBonus = useAppSelector((state) => state.selectedCharacter.backgroundInstance?.abilityScoreDefinitionPlusTwo ?? null);
    const plusOneBonus = useAppSelector((state) => state.selectedCharacter.backgroundInstance?.abilityScoreDefinitionPlusOne ?? null);

    useLayoutEffect(() => {
        if (backgroundDefinition == null) {
            dispatch(setBackgroundDefinition(allBackgrounds[0]));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleBonusChange = (value: string, index: ZeroOrOne) => {
        const scoreAbbreviation = value as AbilityScoreAbbreviations | ""; 
        if ((!plusTwoBonus || plusTwoBonus.abbreviation != scoreAbbreviation) && (!plusOneBonus || plusOneBonus.abbreviation != scoreAbbreviation)) {
            dispatch(setBackgroundScores({scoreAbbreviation, index}));
        }
    }
    
    return (
        <div id="bonus-ability-scores" className="pb-1">
            <label htmlFor="plusTwo">+2</label>
            <select id="plusTwo" value={plusTwoBonus?.abbreviation ?? ""} onChange={(e) => handleBonusChange(e.target.value, 0)}>
                <option value=""></option>
                {Object.keys(playerScores).map((scoreId) => {
                    return (
                        <option key={`bonus-${scoreId}-2`} value={scoreId}>{playerScores[scoreId].definition.name}</option>
                    )
                })}
            </select>
            <label htmlFor="plusOne">+1</label>
            <select id="plusOne" value={plusOneBonus?.abbreviation ?? ""} onChange={(e) => handleBonusChange(e.target.value, 1)}>
                <option value=""></option>
                {Object.keys(playerScores).map((scoreId) => {
                    return (
                        <option key={`bonus-${scoreId}-1`} value={scoreId}>{playerScores[scoreId].definition.name}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default BonusAbilityScore;
