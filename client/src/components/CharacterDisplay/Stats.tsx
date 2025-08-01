import { useAppSelector } from "../../lib/redux/hooks"
import { selectAllAbilityScoreFeatEffects } from "../../lib/redux/selectedCharacterSlice";
import type { AbilityScore } from "../../lib/types/dmToolTypes"

export default function() {
    const scores = useAppSelector((state) => state.selectedCharacter.scores);
    const allAbilityScoreFeatEffects = useAppSelector(selectAllAbilityScoreFeatEffects);
    
    return (
        <div></div>
    )
}

const AbilityScoreDisplay = (score: AbilityScore) => {
    return (
        <div className="ability-score">
            <h3>{score.name}</h3>
        </div>
    )
}