import type { AbilityScoreDefinition } from "../types/dm-tool-types/definitions/abilityScoreDefinition";
import type { SkillDefinition } from "../types/dm-tool-types/definitions/skillDefinition";
import type { AbilityScoreInstance, AbilityScores } from "../types/dm-tool-types/instances/abilityScoreInstance";
import type { SkillInstance } from "../types/dm-tool-types/instances/skillInstance";

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

const skillToInstance = (definition: SkillDefinition): SkillInstance => {
    return {
        id: "",
        isProficient: false,
        definition
    }
}

const scoreGenerator = (scoreId: string, amount: number, definition: AbilityScoreDefinition): AbilityScoreInstance => {
    return {
        id: scoreId,
        score: amount,
        isProficient: false,
        skillInstances: definition.skillDefinitions.map((s) => skillToInstance(s)),
        definition
    }
}

export const getStandardScores = (definitions: AbilityScoreDefinition[] = [], scores: [number, number, number, number, number, number] = [15, 14, 13, 12, 10, 8]): AbilityScores => {
    return {
        "str": scoreGenerator("str", scores[0], definitions.find(d => d.abbreviation == "str") ?? defaultScoreDefinitions[0]),
        "dex": scoreGenerator("dex", scores[1], definitions.find(d => d.abbreviation == "dex") ?? defaultScoreDefinitions[1]),
        "con": scoreGenerator("con", scores[2], definitions.find(d => d.abbreviation == "con") ?? defaultScoreDefinitions[2]),
        "int": scoreGenerator("int", scores[3], definitions.find(d => d.abbreviation == "int") ?? defaultScoreDefinitions[3]),
        "wis": scoreGenerator("wis", scores[4], definitions.find(d => d.abbreviation == "wis") ?? defaultScoreDefinitions[4]),
        "cha": scoreGenerator("cha", scores[5], definitions.find(d => d.abbreviation == "cha") ?? defaultScoreDefinitions[5]),
    };
};

export const getScoreModifier = (score: AbilityScoreInstance): number => {
        return Math.floor((score.score) / 2) - 5
}