import { useAppSelector } from "../../lib/redux/hooks"
import { selectAllAbilityScoreDisplays, selectAllAbilityScores, selectInitiative, selectPassivePerception, selectProficiencyBonus, selectSize, selectSpeed } from "../../lib/redux/selectedCharacterSlice";
import RadioIcon from "../../assets/radio-button-unchecked-svgrepo-com.svg?react";
import RadioCheckedIcon from "../../assets/radio-button-checked-svgrepo-com.svg?react";
import type { AbilityScoreAbbreviations, AbilityScoreDisplay } from "../../lib/redux/types";

const Stats = () => {
    const proficiencyBonus = useAppSelector(selectProficiencyBonus);
    const scores = useAppSelector(selectAllAbilityScores);
    const speed = useAppSelector(selectSpeed);
    const size = useAppSelector(selectSize);
    const abilityScoreDisplays = useAppSelector(selectAllAbilityScoreDisplays);
    const initiative = useAppSelector(selectInitiative);
    const passivePerception = useAppSelector(selectPassivePerception);
    
    return (
        <div id="ability-page" className="w-full flex flex-col items-center gap-3">
            <div id="combat-section" className="card flex justify-around">
                <div id="initiative-section" className="text-center border border-black border-solid rounded-lg p-1 shadow-md">
                    <p className="font-bold">{initiative > 0 ? "+" : ""}{initiative}</p>
                    <hr />
                    <p>Initiative</p>
                </div>
                <div id="speed-section" className="text-center border border-black border-solid rounded-lg p-1 shadow-md">
                    <p className="font-bold">{speed}</p>
                    <hr />
                    <p>Speed</p>
                </div>
                
                <div id="passive-perception" className="text-center border border-black border-solid rounded-lg p-1 shadow-md">
                    <p className="font-bold">{passivePerception}</p>
                    <hr />
                    <p>Passive Perception</p>
                </div>
            </div>
            <div id="ability-section" className="w-full grid grid-cols-2 grid-rows-3 gap-y-3">
                {Object.keys(scores).map((key) => {
                    return (
                        <AbilityScoreDisplay key={key} scoreDisplay={abilityScoreDisplays[key as AbilityScoreAbbreviations]} proficiencyBonus={proficiencyBonus} />
                    )
                })}
            </div>
            <div id="etc-section" className="card flex justify-around">
                <div id="proficiency-section" className="text-center border border-black border-solid rounded-lg p-1 shadow-md">
                    <p className="font-bold">+{proficiencyBonus}</p>
                    <hr />
                    <p>Proficiency Bonus</p>
                </div>
                <div id="size-section" className="text-center border border-black border-solid rounded-lg p-1 shadow-md">
                    <p className="font-bold">{size}</p>
                    <hr />
                    <p>Size</p>
                </div>
            </div>
        </div>
    )
}

interface AbilityScoreDisplayProps {
    scoreDisplay: AbilityScoreDisplay;
    proficiencyBonus: number;
}

const AbilityScoreDisplay = ({ scoreDisplay, proficiencyBonus}: AbilityScoreDisplayProps) => {    
    const savingThrow = scoreDisplay.instance.isProficient ? scoreDisplay.modifier + proficiencyBonus : scoreDisplay.modifier;

    return (
        <div className="ability-score card flex flex-col gap-2 justify-self-center">
            <h3 className="text-center">{scoreDisplay.instance.definition.name}</h3>
            <div id={scoreDisplay.instance.definition.name + "-scores"} className="flex justify-around items-center">
                <div className="modifier text-center border border-black border-solid rounded-lg p-1 shadow-md">
                    <h3 className="font-bold">{scoreDisplay.modifier > 0 ? "+" : ""}{scoreDisplay.modifier}</h3>
                    <hr />
                    <p>Modifier</p>
                </div>
                <div className="score-total text-center border border-black border-solid rounded-lg p-1 shadow-md">
                    <p className="font-bold">{scoreDisplay.totalScore}</p>
                    <hr />
                    <p>Score</p>
                </div>
            </div>
            
            <div className="throws">
                <div className="saving-throw flex gap-1 items-center">
                    {scoreDisplay.instance.isProficient ? 
                        <RadioCheckedIcon className="h-3 w-3" /> :
                        <RadioIcon className="h-3 w-3" />
                    }
                    <p className="font-bold">{savingThrow > 0 ? "+" : ""}{savingThrow}</p>
                    <p>Saving Throw</p>
                </div>
                {scoreDisplay.instance.skillInstances.length > 0 &&
                    <hr />
                }
                <div className="skill-checks">
                    {scoreDisplay.instance.skillInstances.map((skill) => {
                        const check = skill.isProficient ? scoreDisplay.modifier + proficiencyBonus : scoreDisplay.modifier;
                        return (
                            <div className="saving-throw flex items-center gap-1" key={skill.definition.name}>
                                {skill.isProficient ? 
                                    <RadioCheckedIcon className="h-3 w-3" /> :
                                    <RadioIcon className="h-3 w-3" />
                                }
                                <p className="font-bold">{check > 0 ? "+" : ""}{check}</p>
                                <p>{skill.definition.name}</p>
                            </div>
                        )
                    })}
                </div>
                
            </div>
        </div>
    )
}

export default Stats;
