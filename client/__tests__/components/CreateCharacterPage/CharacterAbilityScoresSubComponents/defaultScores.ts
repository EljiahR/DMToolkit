import { rollStat } from "../../../../src/lib/dm-tools/statRoll";
import type { AbilityScores } from "../../../../src/lib/types/dmToolTypes";

export const standardScores: AbilityScores = {
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
}};

export const baseScores: AbilityScores = {
    "str": {
        id: "str",
        name: "Strength",
        amount: 8,
        bonus: 0
    },
    "dex": {
        id: "dex",
        name: "Dexterity",
        amount: 8,
        bonus: 0
    },
    "con": {
        id: "con",
        name: "Constitution",
        amount: 8,
        bonus: 0
    },
    "int": {
        id: "int",
        name: "Intelligence",
        amount: 8,
        bonus: 0
    },
    "wis": {
        id: "wis",
        name: "Wisdom",
        amount: 8,
        bonus: 0
    },
    "cha": {
        id: "cha",
        name: "Charisma",
        amount: 8,
        bonus: 0
}};

export const empytyScores: AbilityScores = {
    "str": {
        id: "str",
        name: "Strength",
        amount: 1,
        bonus: 0
    },
    "dex": {
        id: "dex",
        name: "Dexterity",
        amount: 1,
        bonus: 0
    },
    "con": {
        id: "con",
        name: "Constitution",
        amount: 1,
        bonus: 0
    },
    "int": {
        id: "int",
        name: "Intelligence",
        amount: 1,
        bonus: 0
    },
    "wis": {
        id: "wis",
        name: "Wisdom",
        amount: 1,
        bonus: 0
    },
    "cha": {
        id: "cha",
        name: "Charisma",
        amount: 1,
        bonus: 0
}};

export const getRandomScore = (): AbilityScores => {
    return {
        "str": {
            id: "str",
            name: "Strength",
            amount: rollStat(),
            bonus: 0
        },
        "dex": {
            id: "dex",
            name: "Dexterity",
            amount: rollStat(),
            bonus: 0
        },
        "con": {
            id: "con",
            name: "Constitution",
            amount: rollStat(),
            bonus: 0
        },
        "int": {
            id: "int",
            name: "Intelligence",
            amount: rollStat(),
            bonus: 0
        },
        "wis": {
            id: "wis",
            name: "Wisdom",
            amount: rollStat(),
            bonus: 0
        },
        "cha": {
            id: "cha",
            name: "Charisma",
            amount: rollStat(),
            bonus: 0
    }};
};

export const barbarianScores: AbilityScores = {
    "str": {
        id: "str",
        name: "Strength",
        amount: 15,
        bonus: 0
    },
    "dex": {
        id: "dex",
        name: "Dexterity",
        amount: 13,
        bonus: 0
    },
    "con": {
        id: "con",
        name: "Constitution",
        amount: 14,
        bonus: 0
    },
    "int": {
        id: "int",
        name: "Intelligence",
        amount: 10,
        bonus: 0
    },
    "wis": {
        id: "wis",
        name: "Wisdom",
        amount: 12,
        bonus: 0
    },
    "cha": {
        id: "cha",
        name: "Charisma",
        amount: 8,
        bonus: 0
}};