import { useEffect } from "react";
import type { AbilityScoreProps } from "../../../pages/CreatePlayerCharacterPage";
import { zeroScores } from "../../../../__tests__/components/CreateCharacterPage/CharacterAbilityScoresSubComponents/defaultScores";

export default function({ scores, setScores }: AbilityScoreProps) {
    useEffect(() => {
        setScores(zeroScores);
    }, []);
    
    return (
        <div id="class-default-display">
            <h3>Class Default</h3>
            <div id="class-default"></div>
        </div>
    )
}