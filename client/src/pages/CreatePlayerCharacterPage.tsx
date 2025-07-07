import { useState } from "react";

export type AbilityScores = {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
}

export interface AbilityScoreProps {
    scores: AbilityScores
    handleScores: (score: string, amount: number) => void;
}

const CreatePlayerCharacterPage = () => {
    const [scores, setScores] = useState<AbilityScores>({
        str: 15,
        dex: 14,
        con: 13,
        int: 12,
        wis: 10,
        cha: 8
    });

    const handleScores = (score: string, amount: number) => {
        setScores({
            ...scores,
            [score as keyof AbilityScores]: amount
        })
    };
    
    return (
        <div>
            <h2>Create a new Player Character</h2>
            <button>Start</button>
        </div>
    )
};

export default CreatePlayerCharacterPage;