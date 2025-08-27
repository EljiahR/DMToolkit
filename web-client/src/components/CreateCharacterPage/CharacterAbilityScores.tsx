import { useState } from "react";
import StandardArray from "./CharacterAbilityScoresSubComponents/StandardArray";
import PointBuy from "./CharacterAbilityScoresSubComponents/PointBuy";
import RandomRoll from "./CharacterAbilityScoresSubComponents/RandomRoll";
import ClassDefault from "./CharacterAbilityScoresSubComponents/ClassDefault";
import ManualEntry from "./CharacterAbilityScoresSubComponents/ManualEntry";
import BonusAbilityScores from "./CharacterAbilityScoresSubComponents/BonusAbilityScores";

export default function({className = ""}: {className?: string}) {  
    const [selectedMethod, setSelectedMethod] = useState("standard");
    
    return (
        <div className={className}>
            <h2>Ability Scores</h2>
            <label htmlFor="score-method">Select the method</label>
            <select id="score-method" value={selectedMethod} onChange={(e) => setSelectedMethod(e.target.value)}>
                <option value="standard">Standard Array</option>
                <option value="point">Point Buy</option>
                <option value="random">Random Roll</option>
                <option value="class-default">Class Default</option>
                <option value="manual">Manual Entry</option>
            </select>
            <div id="selected-score-method">
                {selectedMethod == "standard" ?
                    <StandardArray />
                : selectedMethod == "point" ?
                    <PointBuy />
                : selectedMethod == "random" ?
                    <RandomRoll />
                : selectedMethod == "class-default" ?
                    <ClassDefault />
                : selectedMethod == "manual" ?
                    <ManualEntry />
                : null
                }
            </div>
            <BonusAbilityScores />
        </div>
    )
}