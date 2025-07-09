import { useState } from "react";

export type AbilityScore = {
    id: string;
    name: string;
    amount: number;
    bonus: number;
}

export type AbilityScores = {
    [key: string]: AbilityScore;
    "str": AbilityScore;
    "dex": AbilityScore;
    "con": AbilityScore;
    "int": AbilityScore;
    "wis": AbilityScore;
    "cha": AbilityScore;
}

export interface AbilityScoreProps {
    scores: AbilityScores
    setScores: (newScores: AbilityScores) => void;
}

const CreatePlayerCharacterPage = () => {
    const [scores, setScores] = useState<AbilityScores>({
        "str": {
            id: "str",
            name: "Strength",
            amount: 15,
            bonus: 0
        },
        "dex": {
            id: "dex",
            name: "Dexterity",
            amount: 14,
            bonus: 0
        },
        "con": {
            id: "con",
            name: "Constitution",
            amount: 13,
            bonus: 0
        },
        "int": {
            id: "int",
            name: "Intelligence",
            amount: 12,
            bonus: 0
        },
        "wis": {
            id: "wis",
            name: "Wisdom",
            amount: 10,
            bonus: 0
        },
        "cha": {
            id: "cha",
            name: "Charisma",
            amount: 8,
            bonus: 0
        }
    });

    return (
        <div>
            <h2>Create a new Player Character</h2>
            <button>Start</button>
        </div>
    )
};

export default CreatePlayerCharacterPage;