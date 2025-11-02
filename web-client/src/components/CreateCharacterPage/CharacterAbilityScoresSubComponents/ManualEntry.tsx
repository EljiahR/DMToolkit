import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { setScore, setScoresToMinimum } from "../../../lib/redux/selectedCharacterSlice";
import type { AbilityScoreAbbreviations } from "../../../lib/redux/types";
import type { AbilityScoreInstance } from "../../../lib/types/dm-tool-types/instances/abilityScoreInstance";

const ManualEntry = () => {
    const scores = useAppSelector((state) => state.selectedCharacter.scores);
    const plusTwoBonus = useAppSelector((state) => state.selectedCharacter.backgroundInstance?.abilityScoreDefinitionPlusTwo);
    const plusOneBonus = useAppSelector((state) => state.selectedCharacter.backgroundInstance?.abilityScoreDefinitionPlusOne);
    const dispatch = useAppDispatch();
    
    useLayoutEffect(() => {
        dispatch(setScoresToMinimum());
    }, []);

    const updateScore = (value: string, amount: string) => {
        const scoreAbbreviation = value as AbilityScoreAbbreviations
        dispatch(setScore({scoreAbbreviation, amount}));
    }
    
    return (
        <div id="manual-entry-display">
            <h4>Manual Entry</h4>
            <div id="manual-entry" className="flex flex-col gap-1 items-center">
                {Object.keys(scores).map((key) => {
                    return (
                        <ScoreComponent key={`manual-${key}`} score={scores[key]} updateScore={updateScore} bonus={plusTwoBonus?.abbreviation == key ? 2 : plusOneBonus?.abbreviation == key ? 1 : 0} />
                    )
                })}
            </div>
        </div>
    )
}

interface ScoreComponentProps {
    score: AbilityScoreInstance;
    updateScore: (scoreId: string, updatedValue: string) => void;
    bonus: number;
}

const ScoreComponent = ({ score, updateScore, bonus}: ScoreComponentProps) => {
    return (
        <div id={score.definition.name + "-display"} className="flex gap-1 items-center justify-">
            <label htmlFor={`${score.id}-input`}>{score.definition.name}: </label>
            <input type="number" id={`${score.id}-input`} value={score.score} onChange={(e) => updateScore(score.id, e.target.value)} />
            <p className="font-bold">
                {bonus > 0 &&
                    `+${bonus}`
                }
            </p>
        </div>
    )
}

export default ManualEntry;
