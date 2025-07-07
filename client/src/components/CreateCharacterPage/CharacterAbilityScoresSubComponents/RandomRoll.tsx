import type { AbilityScoreProps } from "../CharacterAbilityScores";

export default function({ scores, setScores }: AbilityScoreProps) {
    return (
        <div id="random-roll-display">
            <h3>Random Roll</h3>
            <div id="random-roll"></div>
        </div>
    )
}