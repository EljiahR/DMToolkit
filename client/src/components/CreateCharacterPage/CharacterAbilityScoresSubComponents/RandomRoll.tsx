import { useEffect } from "react";
import type { AbilityScoreProps } from "../../../pages/CreatePlayerCharacterPage";
import { baseScores } from "../../../../__tests__/components/CreateCharacterPage/CharacterAbilityScoresSubComponents/defaultScores";

export default function({ scores, setScores }: AbilityScoreProps) {
    useEffect(() => {
        setScores(baseScores);
    }, []);
    
    return (
        <div id="random-roll-display">
            <h3>Random Roll</h3>
            <div id="random-roll"></div>
        </div>
    );
}