import { useEffect } from "react";
import type { AbilityScoreProps } from "../../../pages/CreatePlayerCharacterPage";
import { zeroScores } from "../../../../__tests__/components/CreateCharacterPage/CharacterAbilityScoresSubComponents/defaultScores";

export default function({ scores, setScores }: AbilityScoreProps) {
    useEffect(() => {
        setScores(zeroScores);
    }, []);
    
    return (
        <div id="manual-entry-display">
            <h3>Manual Entry</h3>
            <div id="manual-entry"></div>
        </div>
    )
}