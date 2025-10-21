import { useLayoutEffect, useMemo } from "react";
import { scoreCalculator, scoreCosts } from "../../../lib/dm-tools/pointBuyCalculator";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { addOneToScore, setScoresToBase, subtractOneFromScore } from "../../../lib/redux/selectedCharacterSlice";
import type { AbilityScoreInstance } from "../../../lib/types/dm-tool-types/instances/abilityScoreInstance";

export default function() {
    const scores = useAppSelector((state) => state.selectedCharacter.scores);
    const plusTwoBonus = useAppSelector((state) => state.selectedCharacter.backgroundInstance?.abilityScoreDefinitionPlusTwo);
    const plusOneBonus = useAppSelector((state) => state.selectedCharacter.backgroundInstance?.abilityScoreDefinitionPlusOne);
    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        dispatch(setScoresToBase());
    }, []);

    const scoreRemainder = useMemo(() => {
        return 27 - scoreCalculator(scores);
    }, [scores]);

    const handleScoreChange = (score: AbilityScoreInstance, isAdditive: boolean) => {
        if (isAdditive && score.score < 15 && scoreRemainder >= (scoreCosts[score.score + 1] - scoreCosts[score.score])) {
            dispatch(addOneToScore(score.definition.abbreviation));
        } else if (!isAdditive && score.score > 8) {
            dispatch(subtractOneFromScore(score.definition.abbreviation));
        }
    }

    return (
        <div id="point-buy-display">
            <h3>Point Buy</h3>
            <div id="point-buy">
                <div id="scores">
                    {Object.keys(scores).map((key) => {
                        return <ScoreDisplay key={`point-buy-${key}`} score={scores[key]} handleScoreChange={handleScoreChange} bonus={plusTwoBonus?.abbreviation == key ? 2 : plusOneBonus?.abbreviation == key ? 1 : 0} />
                    })}
                </div>
                <div id="points">{`Points remaining: ${scoreRemainder}`}</div>
            </div>
        </div>
    )
}

interface ScoreDisplayProps {
    score: AbilityScoreInstance;
    handleScoreChange: (score: AbilityScoreInstance, isAdditive: boolean) => void;
    bonus: number
}

const ScoreDisplay = ({ score, handleScoreChange, bonus }: ScoreDisplayProps) => {
    return (
        <div id={`${score.id}-display`}>
            <p>{`${score.definition.name}: ${bonus > 0 ? `${score.score} +${bonus}` : score.score}`}</p>
            <div>
                <button onClick={() => handleScoreChange(score, true)}>+</button>
                <button onClick={() => handleScoreChange(score, false)}>-</button>
            </div>
        </div>
    )
}