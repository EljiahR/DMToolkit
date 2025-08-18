import { useAppSelector } from "../../lib/redux/hooks"
import { selectAC, selectHp, selectHpMax } from "../../lib/redux/selectedCharacterSlice"

export default function() {
    const hp = useAppSelector(selectHp);
    const hpMax = useAppSelector(selectHpMax);
    const ac = useAppSelector(selectAC);
    
    return (
        <div id="combat-tab">
            <div id="health-ac">
                <div id="ac">{ac}</div>
                <div id="health">{`${hp}/${hpMax}`}</div>
            </div>
            <div id="weapons-and-attacks"></div>
            <div id="death-throws"></div>
            <div id="reroll"></div>
        </div>
    )
}