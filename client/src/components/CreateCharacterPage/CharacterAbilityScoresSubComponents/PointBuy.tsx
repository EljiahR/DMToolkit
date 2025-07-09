import { useEffect, useMemo } from "react";
import type { AbilityScore, AbilityScoreProps } from "../../../pages/CreatePlayerCharacterPage";
import { baseScores } from "../../../../__tests__/components/CreateCharacterPage/CharacterAbilityScoresSubComponents/defaultScores";
import { scoreCalculator, scoreCosts } from "../../../lib/dm-tools/pointBuyCalculator";

export default function({ scores, setScores }: AbilityScoreProps) {
    
    useEffect(() => {
        setScores(baseScores);
    }, []);

    const scoreRemainder = useMemo(() => {
        return 27 - scoreCalculator(scores);
    }, [scores]);

    const handleScoreChange = (score: AbilityScore, isAdditive: boolean) => {
        if (isAdditive && score.amount < 15 && scoreRemainder >= (scoreCosts[score.amount + 1] - scoreCosts[score.amount])) {
            setScores({
                ...scores,
                [score.id]: {...scores[score.id], amount: scores[score.id].amount + 1}
            });
        } else if (!isAdditive && score.amount > 8) {
            setScores({
                ...scores,
                [score.id]: {...scores[score.id], amount: scores[score.id].amount - 1}
            });
        }
    }

    return (
        <div id="point-buy-display">
            <h3>Point Buy</h3>
            <div id="point-buy">
                <div id="scores">
                    {Object.keys(scores).map((key) => {
                        return <ScoreDisplay score={scores[key]} handleScoreChange={handleScoreChange} />
                    })}
                </div>
                <div id="points">{`Points remaining: ${scoreRemainder}`}</div>
            </div>
        </div>
    )
}

interface ScoreDisplayProps {
    score: AbilityScore;
    handleScoreChange: (score: AbilityScore, isAdditive: boolean) => void;
}

const ScoreDisplay = ({ score, handleScoreChange }: ScoreDisplayProps) => {
    return (
        <div id={`${score.id}-display`}>
            <p>{`${score.name}: ${score.amount}`}</p>
            <div>
                <button onClick={() => handleScoreChange(score, true)}>+</button>
                <button onClick={() => handleScoreChange(score, false)}>-</button>
            </div>
        </div>
    )
}