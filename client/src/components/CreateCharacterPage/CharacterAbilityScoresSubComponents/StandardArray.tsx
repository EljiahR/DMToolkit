import type { AbilityScoreProps } from "../CharacterAbilityScores";

export default function({ scores, setScores }: AbilityScoreProps) {
    return (
        <div>
            <h3>Standard Array</h3>
            <div id="standard-array"></div>
        </div>
    )
}