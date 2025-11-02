import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { setScoresToRandom, setScoreToRandom } from "../../../lib/redux/selectedCharacterSlice";
import type { AbilityScoreAbbreviations } from "../../../lib/redux/types";
import type { AbilityScoreInstance } from "../../../lib/types/dm-tool-types/instances/abilityScoreInstance";

const RandomRoll = () => {
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
            <h4>Random Roll</h4>
            <div id="random-roll" className="grid grid-cols-2 grid-rows-3 gap-2">
                {Object.keys(scores).map((key) => {
                    return <ScoreDisplay key={`${key}-score`} score={scores[key]} handleScoreReroll={handleScoreReroll} bonus={plusTwoBonus?.abbreviation == key ? 2 : plusOneBonus?.abbreviation == key ? 1 : 0} />
                })}
            </div>
            <button onClick={handleAllReroll} className="btn btn-tertiary">Reroll All</button>
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
            <p>
                {`${score.definition.name}: ${score.score}`}
                {bonus > 0 &&
                    <span className="font-bold">{` +${bonus}`}</span>
                }
            </p>            
            <button onClick={() => handleScoreReroll(score.id)} className="btn btn-tertiary">Roll</button>
        </div>
    )
}

export default RandomRoll