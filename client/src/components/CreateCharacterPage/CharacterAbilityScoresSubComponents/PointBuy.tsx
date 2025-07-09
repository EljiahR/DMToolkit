import { useEffect, useMemo } from "react";
import type { AbilityScoreProps } from "../../../pages/CreatePlayerCharacterPage";
import { baseScores } from "../../../../__tests__/components/CreateCharacterPage/CharacterAbilityScoresSubComponents/defaultScores";
import { scoreCalculator } from "../../../lib/dm-tools/pointBuyCalculator";

export default function({ scores, setScores }: AbilityScoreProps) {
    
    useEffect(() => {
        setScores(baseScores);
    }, []);

    const scoreRemainder = useMemo(() => {
        return 27 - scoreCalculator(scores);
    }, [scores]);

    return (
        <div id="point-buy-display">
            <h3>Point Buy</h3>
            <div id="point-buy"></div>
        </div>
    )
}