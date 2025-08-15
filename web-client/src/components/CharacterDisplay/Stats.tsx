import { useAppSelector } from "../../lib/redux/hooks"
import { selectAllAbilityScoreFeatEffectBonuses, selectAllAbilityScoreModifiers, selectInitiative } from "../../lib/redux/selectedCharacterSlice";
import type { AbilityScore } from "../../lib/types/dmToolTypes"

export default function() {
    const proficiencyBonus = useAppSelector((state) => state.selectedCharacter.proficiencyBonus);
    const scores = useAppSelector((state) => state.selectedCharacter.scores);
    const speed = useAppSelector((state) => state.selectedCharacter.species.base.speed);
    const size = useAppSelector((state) => state.selectedCharacter.species.base.size);
    const abilityScoreBonuses = useAppSelector(selectAllAbilityScoreFeatEffectBonuses);
    const abilityScoreModifiers = useAppSelector(selectAllAbilityScoreModifiers);
    const initiative = useAppSelector(selectInitiative);
    
    return (
        <div>
            <div id="ability-section">
                {Object.keys(scores).map((key) => {
                    return (
                        <AbilityScoreDisplay key={key} score={scores[key]} bonus={abilityScoreBonuses[key]} modifier={abilityScoreModifiers[key] ?? 0} proficiencyBonus={proficiencyBonus} />
                    )
                })}
            </div>
            <div id="proficiency-section">
                <p>Proficiency Bonus</p>
                <p>+{proficiencyBonus}</p>
            </div>
            <div id="combat-section">
                <div id="initiative-section">
                    <p>Initiative</p>
                    <p>{initiative}</p>
                </div>
                <div id="speed-section">
                    <p>Speed</p>
                    <p>{speed}</p>
                </div>
                <div id="size-section">
                    <p>Size</p>
                    <p>{size}</p>
                </div>
                <div id="passive-perception">
                    <p>Passive Perception</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

interface AbilityScoreDisplayProps {
    score: AbilityScore;
    bonus: number;
    modifier: number;
    proficiencyBonus: number;
}

const AbilityScoreDisplay = ({score, bonus, modifier, proficiencyBonus}: AbilityScoreDisplayProps) => {    
    
    return (
        <div className="ability-score">
            <h3>{score.name}</h3>
            <div className="modifier">
                <p>{modifier}</p>
                <p>Modifier</p>
            </div>
            <div className="score-total">
                <p>{score.amount + bonus}</p>
            </div>
            <div className="throws">
                <div className="saving-throw">
                    <div className={`proficiency-check ${score.proficient ? "checked" : ""}`}></div>
                    <p>{score.proficient ? modifier + proficiencyBonus : modifier}</p>
                    <p>Saving Throw</p>
                </div>
                <div className="skill-checks">

                </div>
                {score.skills.map((skill) => {
                    return (
                        <div className="saving-throw" key={skill.name}>
                            <div className={`proficiency-check ${skill.proficient ? "checked" : ""}`}></div>
                            <p>{skill.proficient ? modifier + proficiencyBonus : modifier}</p>
                            <p>{skill.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}