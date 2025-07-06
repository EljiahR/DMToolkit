export interface AbilityScoreProps {
    scores: {
        str: number,
        dex: number,
        con: number,
        int: number,
        wis: number,
        cha: number
    };
    setScores: (score: string, amount: number) => void;
}

export default function() {
    return (
        <div>Ability Scores</div>
    )
}