import type React from "react";
import XIcon from "../../assets/x-symbol-svgrepo-com.svg?react";
import type { Spell } from "../../lib/types/dm-tool-types/entities/spell";
import type { WeaponInstance } from "../../lib/types/dm-tool-types/items/instances/weaponInstance";
import { useEffect, useState } from "react";
import diceFactory from "../../lib/dm-tools/diceFactory";

interface AttackDisplayProps {
    attack: WeaponInstance | Spell | null;
    removeSelectedAttack: () => void;
}

const AttackDisplay = ({ attack, removeSelectedAttack }: AttackDisplayProps) => {
    const handleOffScreenClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (e.target == e.currentTarget) {
            removeSelectedAttack();
        }
    }
    
    return (
        <div id="attack-display-overlay" className={`fixed p-5 w-screen h-screen top-0 left-0 ${!attack && "hidden"}`} onClick={handleOffScreenClick}>
            <div id="attack-display-container" className="bg-gray-50 rounded w-full h-full p-3 flex flex-col">
                <div id="attack-display-header" className="flex justify-between items-center">
                    <h3 className="flex-grow text-center">
                        {
                            attack && 'school' in attack ? 
                                (attack as Spell).name 
                            : attack ?
                                (attack as WeaponInstance).definition.name
                            : null
                        }
                    </h3>
                    <button id="close-attack-display-btn" className="self-end w-fit p-1" onClick={removeSelectedAttack}>
                        <XIcon className="h-5 w-5" />
                    </button>
                </div>
                <hr className="my-1" />
                {
                    attack && 'school' in attack ? 
                        <SpellDisplay spell={attack} /> 
                    : attack ?
                        <WeaponDisplay weapon={attack} />
                    : null
                }
            </div>
        </div>
    );
}

interface WeaponDisplayProps {
    weapon: WeaponInstance;
}

const WeaponDisplay = ({ weapon }: WeaponDisplayProps) => {
    const [attackRoll, setAttackRoll] = useState(0);
    const [damageRoll, setDamageRoll] = useState(0);
    const d20 = diceFactory(20, 1);
    const weaponDie = diceFactory(weapon.definition.numberOfSides, weapon.definition.numberOfDice);
    const [attackDieRolled, setAttackDieRolled] = useState(false);
    const [damageDieRolled, setDamageDieRolled] = useState(false);

    useEffect(() => {
        if (!attackDieRolled) {
            return;
        }
        
        const attackRollDiv = document.querySelector("#attack-roll-display > h1")
        let index = 0;

        const attackInterval = setInterval(() => {
            if (index < 20) {
                attackRollDiv!.textContent = d20.roll().toString();
                index++;
            } else {
                clearInterval(attackInterval);
                setAttackDieRolled(false);
            }
            
        }, 10)

        return () => clearInterval(attackInterval);

    }, [attackDieRolled]);

    useEffect(() => {
        if (!damageDieRolled) {
            return;
        }

        const damageRollDiv = document.querySelector("#damage-roll-display > h1")
        let index = 0;

        const damageInterval = setInterval(() => {
            if (index < 20) {
                damageRollDiv!.textContent = weaponDie.roll().toString();
                index++;
            } else {
                clearInterval(damageInterval);
                setDamageDieRolled(false);
            }
            
        }, 10)

        return () => clearInterval(damageInterval);

    }, [damageDieRolled])

    const handleAttackRoll = () => {
        setAttackRoll(d20.roll());
        setAttackDieRolled(true);
    }

    const handleDamageRoll = () => {
        setDamageRoll(weaponDie.roll());
        setDamageDieRolled(true);
    }

    return (
        <div id="weapon-display" className="flex-grow flex flex-col justify-around pb-10">
            <div id="attack-roll" className="flex flex-col items-center gap-3">
                <div id="attack-roll-display" className="border rounded border-black size-24 flex justify-center items-center bg-tertiary shadow-md">
                    <h1>{attackRoll}</h1>
                </div>

                
                <button onClick={handleAttackRoll} className="btn btn-secondary w-full">Attack Roll</button>
            </div>
            <div id="damage-roll" className="flex flex-col items-center gap-3">
                <div id="damage-roll-display" className="border rounded border-black size-24 flex justify-center items-center bg-tertiary shadow-md">
                    <h1>{damageRoll}</h1>
                </div>
                <button className="btn btn-secondary w-full" onClick={handleDamageRoll}>{`${weapon.definition.numberOfDice}d${weapon.definition.numberOfSides} ${weapon.definition.damageType}`}</button>
            </div>
        </div>
    )
}

interface SpellDisplayProps {
    spell: Spell;
}

const SpellDisplay = ({ spell }: SpellDisplayProps) => {
    return (
        <div id="spell-display">
            {spell.name}
        </div>
    )
}

export default AttackDisplay;