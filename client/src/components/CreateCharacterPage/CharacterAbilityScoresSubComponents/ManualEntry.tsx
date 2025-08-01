import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { setScore, setScoresToMinimum } from "../../../lib/redux/newCharacterSlice";
import type { AbilityScore } from "../../../lib/types/dmToolTypes";

export default function() {
    const scores = useAppSelector((state) => state.selectedCharacter.scores);
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
                        <ScoreComponent key={`manual-${key}`} score={scores[key]} updateScore={updateScore} />
                    )
                })}
            </div>
        </div>
    )
}

interface ScoreComponentProps {
    score: AbilityScore;
    updateScore: (scoreId: string, updatedValue: string) => void;
}

const ScoreComponent = ({ score, updateScore}: ScoreComponentProps) => {
    return (
        <div>
            <label htmlFor={`${score.id}-input`}>{score.name}: </label>
            <input type="number" id={`${score.id}-input`} value={score.amount} onChange={(e) => updateScore(score.id, e.target.value)} />
            <div>
                {score.bonus > 0 &&
                    `+${score.bonus}`
                }
            </div>
        </div>
    )
}