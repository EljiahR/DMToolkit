import type { AbilityScore, AbilityScores, Skill } from "../types/dm-tool-types/stats"



const skillsGenerator = (names: string[], scoreId: string): Skill[] => {
    return names.map((name) => {
        return {
            id: name,
            name,
            scoreId,
            proficient: false
        }
    })
}

const scoreGenerator = (scoreName: string, scoreId: string, amount: number, skillNames: string[]): AbilityScore => {
    return {
        id: scoreId,
        name: scoreName,
        amount,
        proficient: false,
        skills: skillsGenerator(skillNames, scoreId)
    }
}

export const getStandardScores = (scores: [number, number, number, number, number, number] = [15, 14, 13, 12, 10, 8]): AbilityScores => {
    return {
        "str": scoreGenerator("Strength", "str", scores[0], ["Athletics"]),
        "dex": scoreGenerator("Dexterity", "dex", scores[1], ["Acrobatics", "Sleight of Hand", "Stealth"]),
        "con": scoreGenerator("Constitution", "con", scores[2], []),
        "int": scoreGenerator("Intelligence", "int", scores[3], ["Arcana", "History", "Investigation", "Nature", "Religion"]),
        "wis": scoreGenerator("Wisdom", "wis", scores[4], ["Animal Handling", "Insight", "Medicine", "Perception", "Survival"]),
        "cha": scoreGenerator("Charisma", "cha", scores[5], ["Deception", "Intimidation", "Performance", "Persuasion"]),
    };
};

export const getScoreModifier = (score: AbilityScore): number => {
        return Math.floor((score.amount) / 2) - 5
}