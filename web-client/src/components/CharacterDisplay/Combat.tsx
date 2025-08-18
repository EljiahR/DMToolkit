import { useAppSelector } from "../../lib/redux/hooks"
import { selectAC, selectAllEquippedWeapons, selectHp, selectHpMax } from "../../lib/redux/selectedCharacterSlice"
import type { Weapon } from "../../lib/types/dm-tool-types/items";

export default function() {
    const hp = useAppSelector(selectHp);
    const hpMax = useAppSelector(selectHpMax);
    const ac = useAppSelector(selectAC);
    const weapons = useAppSelector(selectAllEquippedWeapons);
    
    return (
        <div id="combat-tab">
            <div id="health-ac">
                <div id="ac">{ac}</div>
                <div id="health">{`${hp}/${hpMax}`}</div>
            </div>
            <div id="weapons-and-attacks">
                {weapons.map((weapon) => {
                    return (
                        <WeaponDisplay weapon={weapon} />
                    )
                })}
            </div>
            <div id="death-throws"></div>
            <div id="reroll"></div>
        </div>
    )
}

interface WeaponDisplayProps {
    weapon: Weapon;
}

const WeaponDisplay = ({ weapon }: WeaponDisplayProps) => {
    return (
        <div className="weapon-display">
            <p>{weapon.name}</p>
            <p></p>
            <p>{`${weapon.dice[0]}d${weapon.dice[1]} ${weapon.damageType}`}</p>
        </div>
    )
}