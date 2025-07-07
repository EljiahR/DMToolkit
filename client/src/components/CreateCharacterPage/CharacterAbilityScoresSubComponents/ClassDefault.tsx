import type { AbilityScoreProps } from "../CharacterAbilityScores";

export default function({ scores, setScores }: AbilityScoreProps) {
    return (
        <div id="class-default-display">
            <h3>Class Default</h3>
            <div id="class-default"></div>
        </div>
    )
}