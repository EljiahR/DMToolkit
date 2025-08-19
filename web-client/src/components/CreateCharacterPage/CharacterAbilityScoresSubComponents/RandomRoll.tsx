import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { setScoresToRandom, setScoreToRandom } from "../../../lib/redux/selectedCharacterSlice";
import type { AbilityScore } from "../../../lib/types/dm-tool-types/stats";

export default function() {
    const scores = useAppSelector((state) => state.selectedCharacter.scores);
    const bonuses = useAppSelector((state) => state.selectedCharacter.background.abilityScores);
    const dispatch = useAppDispatch();
    
    const handleScoreReroll = (scoreId: string) => {
        dispatch(setScoreToRandom(scoreId));
    };

    const handleAllReroll = () => {
        dispatch(setScoresToRandom());
    };

    useLayoutEffect(() => {
        handleAllReroll();
    }, []);
    
    return (
        <div id="random-roll-display">
            <h3>Random Roll</h3>
            <button onClick={handleAllReroll}>Reroll All</button>
            <div id="random-roll">
                {Object.keys(scores).map((key) => {
                    return <ScoreDisplay key={`${key}-score`} score={scores[key]} handleScoreReroll={handleScoreReroll} bonus={bonuses.includes(key) ? 2 - bonuses.indexOf(key) : 0} />
                })}
            </div>
        </div>
    );
};

interface ScoreDisplayProps {
    score: AbilityScore;
    handleScoreReroll: (scoreId: string) => void;
    bonus: number;
}

const ScoreDisplay = ({ score, handleScoreReroll, bonus }: ScoreDisplayProps) => {
    return (
        <div id={`${score.id}-score`}>
            <p>{`${score.name}: ${bonus > 0 ? `${score.amount} +${bonus}` : score.amount}`}</p>
            <button onClick={() => handleScoreReroll(score.id)}>Roll</button>
        </div>
    )
}