import { getScoreModifier } from "../../../lib/dm-tools/abilityScoreConstructors";
import { useAppSelector } from "../../../lib/redux/hooks"
import type { AbilityScore } from "../../../lib/types/dm-tool-types/character"

export default function() {
    const character = useAppSelector((state) => state.selectedCharacter);
    const bonuses = character.background.abilityScores;
    
    return (
        <div id="first-page">
            <div id="character-info">
                <div id="character-name">
                    <p className="sheet-value"></p>
                    <p className="sheet-label">Character Name</p>
                </div>
                <div id="character-background">
                    <p className="sheet-value"></p>
                    <p className="sheet-label">Background</p>
                </div>
                <div id="character-class">
                    <p className="sheet-value"></p>
                    <p className="sheet-label">Class</p>
                </div>
                <div id="character-species">
                    <p className="sheet-value"></p>
                    <p className="sheet-label">Species</p>
                </div>
                <div id="character-subclass">
                    <p className="sheet-value"></p>
                    <p className="sheet-label">Subclass</p>
                </div>
            </div>
            <div id="character-level">
                <div id="level">
                    <p className="sheet-value"></p>
                    <p className="sheet-label">Level</p>
                </div>
                <div id="xp">
                    <p className="sheet-value"></p>
                    <p className="sheet-label">XP</p>
                </div>
            </div>
            <div id="character-defense">
                <h3>Armor Class</h3>
                <div id="shield">
                    <p className="sheet-label">Shield</p>
                    <div className="toggle"></div>
                </div>
            </div>
            <div id="character-health">
                <div id="hit-points">
                    <h3>Hit Points</h3>
                    <div id="actual-hp">
                        <div id="current-hp">
                            <p className="sheet-value"></p>
                            <p className="sheet-label">Current</p>
                        </div>
                    </div>
                    <div id="other-hp">
                        <div id="temp-hp">
                            <p className="sheet-value"></p>
                            <p className="sheet-label">Temp</p>
                        </div>
                        <div id="max-hp">
                            <p className="sheet-value"></p>
                            <p className="sheet-label">Max</p>
                        </div>
                    </div>
                </div>
                <div id="hit-dice">
                    <div id="spent-dice">
                        <p className="sheet-value"></p>
                        <p className="sheet-label">Spent</p>
                    </div>
                    <div id="max-dice">
                        <p className="sheet-value"></p>
                        <p className="sheet-label">Max</p>
                    </div>
                </div>
                <div id="death-saves">
                    <div id="success-rolls">
                        <div className="rolls">
                            <div className="toggle"></div>
                            <div className="toggle"></div>
                            <div className="toggle"></div>
                        </div>
                        <p className="sheet-label">Successes</p>
                    </div>
                    <div id="failure-rolls">
                        <div className="rolls">
                            <div className="toggle"></div>
                            <div className="toggle"></div>
                            <div className="toggle"></div>
                        </div>
                        <p className="sheet-label">Failures</p>
                    </div>
                </div>
            </div>
            <div id="character-description"></div>
            <div id="character-stats">
                <div id="proficiency"></div>
                <div id="re-roll"></div>
                <div id="ability-scores">
                    {Object.keys(character.scores).map((key) => 
                        <AbilityScoreDisplay score={character.scores[key]} proficiencyBonus={character.proficiencyBonus} bonus={bonuses.includes(key) ? 2 - bonuses.indexOf(key) : 0} />
                    )}
                </div>
            </div>
            <div id="character-equiptment"></div>
            <div id="misc-combat"></div>
            <div id="attacks"></div>
            <div id="feats-traits">
                <div id="class-feats"></div>
                <div id="species-traits"></div>
                <div id="other-feats"></div>
            </div>
        </div>
    )
}

interface AbililtyScoreDisplayProps {
    score: AbilityScore;
    proficiencyBonus: number;
    bonus: number
}

const AbilityScoreDisplay = ({ score, proficiencyBonus, bonus }: AbililtyScoreDisplayProps) => {
    return (
        <div>
            <div id={`${score.id}-main`}>
                <h3>{score.name}</h3>
                <div id={`${score.id}-mod`}>
                    <div>{getScoreModifier(score)}</div>
                    <p className="sheet-label">Modifier</p>
                </div>
                <div id={`${score.id}-score`}>
                    <div>{score.amount + bonus}</div>
                    <p className="sheet-label">Score</p>
                </div>
            </div>
            <div id={`${score.id}-throws`}>
                <div id={`${score.id}-saving-throw`}>
                    <div className="throw-toggle"></div>
                    <div className="throw-score">{score.proficient ? getScoreModifier(score) + proficiencyBonus : getScoreModifier(score)}</div>
                    <div className="throw-score-label bold">Saving Throw</div>
                </div>
                <div className="divider"></div>
                {score.skills.map((skill) => 
                    <div id={`${skill.name}-skill`}>
                        <div className="throw-toggle"></div>
                        <div className="throw-score">{skill.proficient ? getScoreModifier(score) + proficiencyBonus : getScoreModifier(score)}</div>
                        <div className="throw-score-label">{skill.name}</div>
                    </div>
                )}
            </div>
        </div>
    )
}