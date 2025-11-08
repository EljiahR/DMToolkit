import type { AbilityScoreAbbreviations } from "../redux/types";
import type { Piece } from "../types/dm-tool-types/items/bases/worth";

export const Copper: Piece = {
    name: "Copper",
    abbreviation: "CP",
    nextStep: 10,
    amount: 0
};

export const Silver: Piece = {
    name: "Silver",
    abbreviation: "SP",
    nextStep: 5,
    amount: 0
};

export const Electum: Piece = {
    name: "Electum",
    abbreviation: "EP",
    nextStep: 2,
    amount: 0
};

export const Gold: Piece = {
    name: "Gold",
    abbreviation: "GP",
    nextStep: 10,
    amount: 0
};

export const Platinum: Piece = {
    name: "Platinum",
    abbreviation: "PP",
    nextStep: 0,
    amount: 0
};

export const StandardScoresArray = [15, 14, 13, 12, 10, 8];

export const ScoreAbbreviations: AbilityScoreAbbreviations[] = ["str", "dex", "con", "int", "wis", "cha"];

export const ScoreAbbreviationsToString: Record<AbilityScoreAbbreviations, string> = {
    "str": "Strength",
    "dex": "Dexterity",
    "con": "Constitution",
    "int": "Intelligence",
    "wis": "Wisdom",
    "cha": "Charisma"
}

export const EquippableItemTypes = ["Armor", "Weapon"];
