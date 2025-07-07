import type { AbilityScoreProps } from "../CharacterAbilityScores";

export default function({ scores, setScores }: AbilityScoreProps) {
    return (
        <div id="manual-entry-display">
            <h3>Manual Entry</h3>
            <div id="manual-entry"></div>
        </div>
    )
}