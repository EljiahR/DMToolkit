import { useAppSelector } from "../../lib/redux/hooks"
import { selectAC, selectAllEquippedWeapons, selectHp, selectHpMax, selectInitiative, selectSpeed } from "../../lib/redux/selectedCharacterSlice"
import type { WeaponInstance } from "../../lib/types/dm-tool-types/items/instances/weaponInstance";
import RadioIcon from "../../assets/radio-button-unchecked-svgrepo-com.svg?react";
import { useState } from "react";
import type { Spell } from "../../lib/types/dm-tool-types/entities/spell";
import AttackDisplay from "./AttackDisplay";

const Combat = () => {
    const hp = useAppSelector(selectHp);
    const hpMax = useAppSelector(selectHpMax);
    const ac = useAppSelector(selectAC);
    const weapons = useAppSelector(selectAllEquippedWeapons);
    const initiative = useAppSelector(selectInitiative);
    const speed = useAppSelector(selectSpeed);
    const [selectedAttack, setSelectedAttack] = useState<WeaponInstance | Spell | null>(null);
    
    const removeSelectedAttack = () => {
        setSelectedAttack(null);
    }

    const handleAttackView = (attack: WeaponInstance | Spell) => {
        if (!selectedAttack) {
            setSelectedAttack(attack);
        } else {
            setSelectedAttack(null);
        }
    }

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
            
            <div id="weapons-and-damage-cantrips" className="card flex flex-col gap-1">
                <div id="wac-labels" className="wac-display">
                    <p className="text-xs">Name</p>
                    <p className="text-xs">Atk/DC</p>
                    <p className="text-xs">Dmg</p>
                    <p className="text-xs">Details</p>
                </div>
                {weapons.map((weapon) => {
                    return (
                        <EquippedDisplay weapon={weapon} handleAttackView={handleAttackView} />
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
            <AttackDisplay attack={selectedAttack} removeSelectedAttack={removeSelectedAttack} />
        </div>
    )
}

interface EquippedDisplayProps {
    weapon: WeaponInstance;
    handleAttackView: (attack: WeaponInstance | Spell) => void;
}

const EquippedDisplay = ({ weapon, handleAttackView }: EquippedDisplayProps) => {
    return (
        <div className="wac-display mini-card">
            <p>{weapon.definition.name}</p>
            <p>+5</p>
            <p>{`${weapon.definition.numberOfDice}d${weapon.definition.numberOfSides}`}</p>
            <button className="bg-green-200 rounded" onClick={() => handleAttackView(weapon)}>View</button>
        </div>
    )
}

export default Combat;
