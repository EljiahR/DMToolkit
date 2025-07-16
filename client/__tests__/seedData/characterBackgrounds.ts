import type { BackgroundBase } from "../../src/lib/types/dmToolTypes";
import { acolyteDescription, criminalDescription } from "./descriptions";

export const characterBackgrounds: BackgroundBase[] = [
    {
        id: "churchlurker",
        name: "Acolyte",
        description: acolyteDescription,
        abilityScores: ["int", "wis", "cha"],
        features: [],
        skillProficiencies: []
    },
    {
        id: "ahcrap",
        name: "Criminal",
        description: criminalDescription,
        abilityScores: ["dex", "con", "int"],
        features: [],
        skillProficiencies: []
    }
];