import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { setScore, setScoresToMinimum } from "../../../lib/redux/selectedCharacterSlice";
import type { AbilityScore } from "../../../lib/types/dm-tool-types/stats";

export default function() {
    const scores = useAppSelector((state) => state.selectedCharacter.scores);
    const bonuses = useAppSelector((state) => state.selectedCharacter.background.abilityScores);
    const dispatch = useAppDispatch();
    
    useLayoutEffect(() => {
        dispatch(setScoresToMinimum());
    }, []);

    const updateScore = (scoreId: string, amount: string) => {
        dispatch(setScore({scoreId, amount}));
    }
    
    return (
        <div id="manual-entry-display">
            <h3>Manual Entry</h3>
            <div id="manual-entry">
                {Object.keys(scores).map((key) => {
                    return (
                        <ScoreComponent key={`manual-${key}`} score={scores[key]} updateScore={updateScore} bonus={bonuses.includes(key) ? 2 - bonuses.indexOf(key) : 0} />
                    )
                })}
            </div>
        </div>
    )
}

interface ScoreComponentProps {
    score: AbilityScore;
    updateScore: (scoreId: string, updatedValue: string) => void;
    bonus: number;
}

const ScoreComponent = ({ score, updateScore, bonus}: ScoreComponentProps) => {
    return (
        <div>
            <label htmlFor={`${score.id}-input`}>{score.name}: </label>
            <input type="number" id={`${score.id}-input`} value={score.amount} onChange={(e) => updateScore(score.id, e.target.value)} />
            <div>
                {bonus > 0 &&
                    `+${bonus}`
                }
            </div>
        </div>
    )
}