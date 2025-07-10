import { useEffect } from "react";
import type { AbilityScore, AbilityScoreProps } from "../../../pages/CreatePlayerCharacterPage";
import { rollStat } from "../../../lib/dm-tools/statRoll";

export default function({ scores, setScores }: AbilityScoreProps) {
    const handleScoreReroll = (scoreId: string) => {
        setScores({
            ...scores,
            [scoreId]: {...scores[scoreId], amount: rollStat()}
        });
    };

    const handleAllReroll = () => {
        const newScores = {...scores};
        Object.keys(newScores).forEach((key) => {
            newScores[key].amount = rollStat();
        })
        setScores(newScores);
    };

    useEffect(() => {
        handleAllReroll();
    }, []);
    
    return (
        <div id="random-roll-display">
            <h3>Random Roll</h3>
            <div id="random-roll">
                {Object.keys(scores).map((key) => {
                    return <ScoreDisplay score={scores[key]} handleScoreReroll={handleScoreReroll} />
                })}
            </div>
        </div>
    );
};

interface ScoreDisplayProps {
    score: AbilityScore;
    handleScoreReroll: (scoreId: string) => void;
}

const ScoreDisplay = ({ score, handleScoreReroll }: ScoreDisplayProps) => {
    return (
        <div id={`${score.id}-score`}>
            <p>{`${score.name}: ${score.amount}`}</p>
            <button onClick={() => handleScoreReroll(score.id)}>Roll</button>
        </div>
    )
}