import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { setScoresToRandom, setScoreToRandom } from "../../../lib/redux/newCharacterSlice";
import type { AbilityScore } from "../../../lib/types/dmToolTypes";

export default function() {
    const scores = useAppSelector((state) => state.newCharacter.scores);
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
            <p>{`${score.name}: ${score.bonus > 0 ? `${score.amount} +${score.bonus}` : score.amount}`}</p>
            <button onClick={() => handleScoreReroll(score.id)}>Roll</button>
        </div>
    )
}