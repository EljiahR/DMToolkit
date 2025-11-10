import { useAppSelector } from "../../lib/redux/hooks"
import { selectAC, selectAllEquippedWeapons, selectHp, selectHpMax, selectInitiative, selectSpeed } from "../../lib/redux/selectedCharacterSlice"
import type { WeaponInstance } from "../../lib/types/dm-tool-types/items/instances/weaponInstance";
import RadioIcon from "../../assets/radio-button-unchecked-svgrepo-com.svg?react";

const Combat = () => {
    const hp = useAppSelector(selectHp);
    const hpMax = useAppSelector(selectHpMax);
    const ac = useAppSelector(selectAC);
    const weapons = useAppSelector(selectAllEquippedWeapons);
    const initiative = useAppSelector(selectInitiative);
    const speed = useAppSelector(selectSpeed);
    
    return (
        <div id="combat-tab" className="flex flex-col gap-3">
            <div id="combat-stats-1" className="card flex gap-2 justify-center">
                <div id="ac" className="mini-card">
                    <p className="font-bold">{ac}</p>
                    <hr />
                    <p>AC</p>
                </div>
                <div id="health" className="mini-card">
                    <p className="font-bold">{`${hp}/${hpMax}`}</p>
                    <hr />
                    <p>HP</p>
                </div>
                <div id="initiative-section" className="mini-card">
                    <p className="font-bold">{initiative > 0 ? "+" : ""}{initiative}</p>
                    <hr />
                    <p>Initiative</p>
                </div>
                <div id="speed-section" className="mini-card">
                    <p className="font-bold">{speed}</p>
                    <hr />
                    <p>Speed</p>
                </div>
                <div id="reroll" className="mini-card">
                    <RadioIcon className="h-5 w-5" />
                    <hr />
                    <p>Reroll</p>
                </div>
            </div>
            
            <div id="weapons-and-attacks" className="card">
                {weapons.map((weapon) => {
                    return (
                        <WeaponDisplay weapon={weapon} />
                    )
                })}
            </div>
            <div id="combat-stats-2" className="card">
                <div id="death-throws" className="mini-card">
                    <div id="throws" className="w-full grid grid-cols-2 justify-center gap-5">
                        <div id="successesful-throws">
                            <div id="successesful-throw-pips" className="flex justify-center">
                                <RadioIcon className="h-5 w-5" />
                                <RadioIcon className="h-5 w-5" />
                                <RadioIcon className="h-5 w-5" />
                            </div>
                            <p className="italic">Successes</p>
                        </div>
                        <div id="failed-throws">
                            <div id="failed-throw-pips" className="flex justify-center">
                                <RadioIcon className="h-5 w-5" />
                                <RadioIcon className="h-5 w-5" />
                                <RadioIcon className="h-5 w-5" />
                            </div>
                            <p className="italic">Failures</p>
                        </div>
                    </div>
                    <hr />
                    <p>Death Throws</p>
                </div>
            </div>
        </div>
    )
}

interface WeaponDisplayProps {
    weapon: WeaponInstance;
}

const WeaponDisplay = ({ weapon }: WeaponDisplayProps) => {
    return (
        <div className="weapon-display">
            <p>{weapon.definition.name}</p>
            <p></p>
            <p>{`${weapon.definition.numberOfDice}d${weapon.definition.numberOfSides} ${weapon.definition.damageType}`}</p>
        </div>
    )
}

export default Combat;
