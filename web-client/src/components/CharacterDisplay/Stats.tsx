import { useAppSelector } from "../../lib/redux/hooks"
import { selectAllAbilityScoreFeatEffectBonuses, selectAllAbilityScoreModifiers, selectAllAbilityScores, selectInitiative, selectPassivePerception, selectProficiencyBonus, selectSize, selectSpeed } from "../../lib/redux/selectedCharacterSlice";
import type { AbilityScoreInstance } from "../../lib/types/dm-tool-types/instances/abilityScoreInstance";

const Stats = () => {
    const proficiencyBonus = useAppSelector(selectProficiencyBonus);
    const scores = useAppSelector(selectAllAbilityScores);
    const speed = useAppSelector(selectSpeed);
    const size = useAppSelector(selectSize);
    const abilityScoreBonuses = useAppSelector(selectAllAbilityScoreFeatEffectBonuses);
    const abilityScoreModifiers = useAppSelector(selectAllAbilityScoreModifiers);
    const initiative = useAppSelector(selectInitiative);
    const passivePerception = useAppSelector(selectPassivePerception);
    
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
                    <p>{passivePerception}</p>
                </div>
            </div>
        </div>
    )
}

interface AbilityScoreDisplayProps {
    score: AbilityScoreInstance;
    bonus: number;
    modifier: number;
    proficiencyBonus: number;
}

const AbilityScoreDisplay = ({score, bonus, modifier, proficiencyBonus}: AbilityScoreDisplayProps) => {    
    
    return (
        <div className="ability-score">
            <h3>{score.definition.name}</h3>
            <div className="modifier">
                <p>{modifier}</p>
                <p>Modifier</p>
            </div>
            <div className="score-total">
                <p>{score.score + bonus}</p>
            </div>
            <div className="throws">
                <div className="saving-throw">
                    <div className={`proficiency-check ${score.isProficient ? "checked" : ""}`}></div>
                    <p>{score.isProficient ? modifier + proficiencyBonus : modifier}</p>
                    <p>Saving Throw</p>
                </div>
                <div className="skill-checks">

                </div>
                {score.skillInstances.map((skill) => {
                    return (
                        <div className="saving-throw" key={skill.definition.name}>
                            <div className={`proficiency-check ${skill.isProficient ? "checked" : ""}`}></div>
                            <p>{skill.isProficient ? modifier + proficiencyBonus : modifier}</p>
                            <p>{skill.definition.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Stats;
