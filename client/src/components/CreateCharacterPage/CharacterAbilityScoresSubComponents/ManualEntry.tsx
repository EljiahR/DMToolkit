import { useEffect } from "react";
import type { AbilityScore, AbilityScoreProps } from "../../../pages/CreatePlayerCharacterPage";

export default function({ scores, setScores }: AbilityScoreProps) {
    useEffect(() => {
        setScores((prevScores) => {
            Object.keys(prevScores).forEach((key) => {
                prevScores[key].amount = 1;
            })
            return prevScores;
        });
    }, []);

    const updateScore = (scoreId: string, updatedValue: string) => {
        var parsedValue = parseInt(updatedValue);
        parsedValue = parsedValue > 20 ? 20 : parsedValue < 1 ? 1 : parsedValue;
        
        setScores({
            ...scores,
            [scoreId]: {...scores[scoreId], amount: parsedValue}
        })
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
        </div>
    )
}