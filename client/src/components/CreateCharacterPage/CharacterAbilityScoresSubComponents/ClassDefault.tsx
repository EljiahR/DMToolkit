import { useEffect } from "react";
import type { AbilityScoreWithClassScoresProps } from "../../../pages/CreatePlayerCharacterPage";

export default function({ scores, setScores, classDefaultScores }: AbilityScoreWithClassScoresProps) {
    useEffect(() => {
        setScores(classDefaultScores);
    }, []);
    
    return (
        <div id="class-default-display">
            <h3>Class Default</h3>
            <div id="class-default">
                {Object.keys(scores).map((key) => {
                    return (
                        <div key={`$default-${key}`}>
                            <p>{`${scores[key].name}: ${scores[key].amount}`}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}