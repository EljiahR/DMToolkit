import type { AbilityScoreProps } from "../../pages/CreatePlayerCharacterPage";
import StandardArray from "./CharacterAbilityScoresSubComponents/StandardArray";

export default function({scores, handleScores}: AbilityScoreProps) {  
    return (
        <div>
            <h2>Ability Scores</h2>
            <label htmlFor="score-method">Select the method</label>
            <select id="score-method"></select>
            <div id="selected-score-method">
                <StandardArray scores={scores} handleScores={handleScores} />
            </div>
        </div>
    )
}