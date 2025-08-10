import { getModifier } from "../../lib/dm-tools/stats";
import { useAppSelector } from "../../lib/redux/hooks"
import { selectAllAbilityScoreFeatEffects, selectAllInitiativeBonuseFeatEffects } from "../../lib/redux/selectedCharacterSlice";
import type { AbilityScore } from "../../lib/types/dmToolTypes"

export default function() {
    const proficiencyBonus = useAppSelector((state) => state.selectedCharacter.proficiencyBonus);
    const scores = useAppSelector((state) => state.selectedCharacter.scores);
    const speed = useAppSelector((state) => state.selectedCharacter.species.base.speed);
    const size = useAppSelector((state) => state.selectedCharacter.species.base.size);
    const allAbilityScoreFeatEffects = useAppSelector(selectAllAbilityScoreFeatEffects);
    const allInitiativeFeatEffects = useAppSelector(selectAllInitiativeBonuseFeatEffects);
    

    const getAllBonuses = (key: string) => {
        var bonusTotal = 0;
        allAbilityScoreFeatEffects.filter((effect) => effect.data["statId"] == key).forEach((effect) => {
            bonusTotal += effect.data["amount"];
        });

        return bonusTotal;
    };

    const getInitiative = () => {
        var initiativeTotal = 10 + getModifier(scores["dex"].amount + getAllBonuses("dex"));
        allInitiativeFeatEffects.forEach((effect) => initiativeTotal += effect.data["amount"]);
        return initiativeTotal;
    }
    const initiative = getInitiative();
    
    return (
        <div>
            <div id="ability-section">
                {Object.keys(scores).map((key) => {
                    return (
                        <AbilityScoreDisplay key={key} score={scores[key]} bonus={getAllBonuses(key)} proficiencyBonus={proficiencyBonus} />
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
    const scoreMod = getModifier(score.amount + bonus);
    
    return (
        <div className="ability-score">
            <h3>{score.name}</h3>
            <div className="modifier">
                <p>{scoreMod}</p>
                <p>Modifier</p>
            </div>
            <div className="score-total">
                <p>{score.amount + bonus}</p>
            </div>
            <div className="throws">
                <div className="saving-throw">
                    <div className={`proficiency-check ${score.proficient ? "checked" : ""}`}></div>
                    <p>{score.proficient ? scoreMod + proficiencyBonus : scoreMod}</p>
                    <p>Saving Throw</p>
                </div>
                <div className="skill-checks">

                </div>
                {score.skills.map((skill) => {
                    return (
                        <div className="saving-throw" key={skill.name}>
                            <div className={`proficiency-check ${skill.proficient ? "checked" : ""}`}></div>
                            <p>{skill.proficient ? scoreMod + proficiencyBonus : scoreMod}</p>
                            <p>{skill.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}