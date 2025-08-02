import { useAppSelector } from "../../lib/redux/hooks"
import { selectAllAbilityScoreFeatEffects } from "../../lib/redux/selectedCharacterSlice";
import type { AbilityScore } from "../../lib/types/dmToolTypes"

export default function() {
    const proficiencyBonus = useAppSelector((state) => state.selectedCharacter.proficiencyBonus);
    const scores = useAppSelector((state) => state.selectedCharacter.scores);
    const allAbilityScoreFeatEffects = useAppSelector(selectAllAbilityScoreFeatEffects);

    const getAllBonuses = (key: string) => {
        var bonusTotal = 0;
        allAbilityScoreFeatEffects.filter((effect) => effect.data["statId"] == key).forEach((effect) => {
            bonusTotal += effect.data["amount"];
        });

        return bonusTotal;
    }
    
    return (
        <div>
            <div id="ability-section">
                {Object.keys(scores).map((key) => {
                    return (
                        <AbilityScoreDisplay key={key} score={scores[key]} bonus={getAllBonuses(key)} proficiencyBonus={proficiencyBonus} />
                    )
                })}
            </div>
        </div>
    )
}

interface AbilityScoreDisplayProps {
    score: AbilityScore;
    bonus: number;
    proficiencyBonus: number;
}

const AbilityScoreDisplay = ({score, bonus, proficiencyBonus}: AbilityScoreDisplayProps) => {
    const getModifier = (score: number, bonus: number) => Math.floor((score + bonus) / 2) - 5;
    
    return (
        <div className="ability-score">
            <h3>{score.name}</h3>
            <div className="modifier">
                <p>{getModifier(score.amount, bonus)}</p>
                <p>Modifier</p>
            </div>
            <div className="score-total">
                <p>{score.amount + bonus}</p>
            </div>
            <div className="throws">
                <div className="saving-throw">
                    <div className={`proficiency-check ${score.proficient ? "checked" : ""}`}></div>
                    <p>{score.proficient ? getModifier(score.amount, bonus) + proficiencyBonus : getModifier(score.amount, bonus)}</p>
                    <p>Saving Throw</p>
                </div>
                <div className="skill-checks">

                </div>
                {score.skills.map((skill) => {
                    return (
                        <div className="saving-throw" key={skill.name}>
                            <div className={`proficiency-check ${skill.proficient ? "checked" : ""}`}></div>
                            <p>{skill.proficient ? getModifier(score.amount, bonus) + proficiencyBonus : getModifier(score.amount, bonus)}</p>
                            <p>{skill.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}