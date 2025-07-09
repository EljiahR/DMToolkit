import { useEffect } from "react";
import type { AbilityScoreProps } from "../../../pages/CreatePlayerCharacterPage";
import { zeroScores } from "../../../../__tests__/components/CreateCharacterPage/CharacterAbilityScoresSubComponents/defaultScores";

export default function({ scores, setScores }: AbilityScoreProps) {
    useEffect(() => {
        setScores(zeroScores);
    }, []);
    
    return (
        <div id="random-roll-display">
            <h3>Random Roll</h3>
            <div id="random-roll"></div>
        </div>
    );
}