import type { AbilityScoreDefinition } from "../types/dm-tool-types/definitions/abilityScoreDefinition";
import type { AbilityScoreInstance, AbilityScores } from "../types/dm-tool-types/stats"

const defaultScoreDefinitions: AbilityScoreDefinition[] = [
    
    {
        id: "1str",
        name: "Strength",
        abbreviation: "str",
        description: "",
        skillDefinitions: []
    },
    {
        id: "2dex",
        name: "Dexterity",
        abbreviation: "dex",
        description: "",
        skillDefinitions: []
    },
    {
        id: "4con",
        name: "Constitution",
        abbreviation: "con",
        description: "",
        skillDefinitions: []
    },
    {
        id: "4int",
        name: "Intelligence",
        abbreviation: "int",
        description: "",
        skillDefinitions: []
    },
    {
        id: "5wis",
        name: "Wisdom",
        abbreviation: "wis",
        description: "",
        skillDefinitions: []
    },
    {
        id: "6cha",
        name: "Charisma",
        abbreviation: "cha",
        description: "",
        skillDefinitions: []
    }
    
]

const scoreGenerator = (scoreId: string, amount: number, definition: AbilityScoreDefinition): AbilityScoreInstance => {
    return {
        id: scoreId,
        amount,
        proficient: false,
        skillInstances: [],
        definition
    }
}

export const getStandardScores = (scores: [number, number, number, number, number, number] = [15, 14, 13, 12, 10, 8]): AbilityScores => {
    return {
        "str": scoreGenerator("str", scores[0], defaultScoreDefinitions[0]),
        "dex": scoreGenerator("dex", scores[1], defaultScoreDefinitions[1]),
        "con": scoreGenerator("con", scores[2], defaultScoreDefinitions[2]),
        "int": scoreGenerator("int", scores[3], defaultScoreDefinitions[3]),
        "wis": scoreGenerator("wis", scores[4], defaultScoreDefinitions[4]),
        "cha": scoreGenerator("cha", scores[5], defaultScoreDefinitions[5]),
    };
};

export const getScoreModifier = (score: AbilityScoreInstance): number => {
        return Math.floor((score.amount) / 2) - 5
}