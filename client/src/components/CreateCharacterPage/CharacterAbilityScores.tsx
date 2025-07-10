import { useState } from "react";
import type { AbilityScoreProps } from "../../pages/CreatePlayerCharacterPage";
import StandardArray from "./CharacterAbilityScoresSubComponents/StandardArray";
import PointBuy from "./CharacterAbilityScoresSubComponents/PointBuy";
import RandomRoll from "./CharacterAbilityScoresSubComponents/RandomRoll";
import ClassDefault from "./CharacterAbilityScoresSubComponents/ClassDefault";
import ManualEntry from "./CharacterAbilityScoresSubComponents/ManualEntry";

export default function({scores, setScores}: AbilityScoreProps) {  
    const [selectedMethod, setSelectedMethod] = useState("standard");
    
    return (
        <div>
            <h2>Ability Scores</h2>
            <label htmlFor="score-method">Select the method</label>
            <select id="score-method" value={selectedMethod} onChange={(e) => setSelectedMethod(e.target.value)}>
                <option value="standard" selected>Standard Array</option>
                <option value="point">Point Buy</option>
                <option value="random">Random Roll</option>
                <option value="class-default">Class Default</option>
                <option value="manual">Manual Entry</option>
            </select>
            <div id="selected-score-method">
                {selectedMethod == "standard" ?
                    <StandardArray scores={scores} setScores={setScores} />
                : selectedMethod == "point" ?
                    <PointBuy scores={scores} setScores={setScores} />
                : selectedMethod == "random" ?
                    <RandomRoll scores={scores} setScores={setScores} />
                : selectedMethod == "class-default" ?
                    <ClassDefault scores={scores} setScores={setScores} />
                : selectedMethod == "manual" ?
                    <ManualEntry scores={scores} setScores={setScores} />
                : null
                }
            </div>
        </div>
    )
}