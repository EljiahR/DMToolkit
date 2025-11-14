import type React from "react";
import XIcon from "../../assets/x-symbol-svgrepo-com.svg?react";
import type { Spell } from "../../lib/types/dm-tool-types/entities/spell";
import type { WeaponInstance } from "../../lib/types/dm-tool-types/items/instances/weaponInstance";

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
                    <h3>
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
    return (
        <div id="weapon-display" className="flex-grow flex flex-col">
        </div>
    )
}

interface SpellDisplayProps {
    spell: Spell;
}

const SpellDisplay = ({ spell }: SpellDisplayProps) => {
    return (
        <div id="spell-display">

        </div>
    )
}

export default AttackDisplay;