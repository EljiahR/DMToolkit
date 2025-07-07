import type { AbilityScoreProps } from "../CharacterAbilityScores";

export default function({ scores, setScores }: AbilityScoreProps) {
    return (
        <div id="point-buy-display">
            <h3>Point Buy</h3>
            <div id="point-buy"></div>
        </div>
    )
}