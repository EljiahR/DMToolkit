import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { setScoresToRandom, setScoreToRandom } from "../../../lib/redux/selectedCharacterSlice";
import type { AbilityScoreAbbreviations } from "../../../lib/redux/types";
import type { AbilityScoreInstance } from "../../../lib/types/dm-tool-types/instances/abilityScoreInstance";

export default function() {
    const scores = useAppSelector((state) => state.selectedCharacter.scores);
    const plusTwoBonus = useAppSelector((state) => state.selectedCharacter.backgroundInstance?.abilityScoreDefinitionPlusTwo);
    const plusOneBonus = useAppSelector((state) => state.selectedCharacter.backgroundInstance?.abilityScoreDefinitionPlusOne);
    const dispatch = useAppDispatch();
    
    const handleScoreReroll = (value: string) => {
        const scoreAbbreviation = value as AbilityScoreAbbreviations;
        dispatch(setScoreToRandom(scoreAbbreviation));
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
                    return <ScoreDisplay key={`${key}-score`} score={scores[key]} handleScoreReroll={handleScoreReroll} bonus={plusTwoBonus?.abbreviation == key ? 2 : plusOneBonus?.abbreviation == key ? 1 : 0} />
                })}
            </div>
        </div>
    );
};

interface ScoreDisplayProps {
    score: AbilityScoreInstance;
    handleScoreReroll: (scoreId: string) => void;
    bonus: number;
}

const ScoreDisplay = ({ score, handleScoreReroll, bonus }: ScoreDisplayProps) => {
    return (
        <div id={`${score.id}-score`}>
            <p>{`${score.definition.name}: ${bonus > 0 ? `${score.score} +${bonus}` : score.score}`}</p>
            <button onClick={() => handleScoreReroll(score.id)}>Roll</button>
        </div>
    )
}