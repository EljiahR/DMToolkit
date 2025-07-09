import { useEffect } from "react";
import type { AbilityScoreProps } from "../../../pages/CreatePlayerCharacterPage";
import { zeroScores } from "../../../../__tests__/components/CreateCharacterPage/CharacterAbilityScoresSubComponents/defaultScores";

export default function({ scores, setScores }: AbilityScoreProps) {
    useEffect(() => {
        setScores(zeroScores);
    }, []);
    
    return (
        <div id="point-buy-display">
            <h3>Point Buy</h3>
            <div id="point-buy"></div>
        </div>
    )
}