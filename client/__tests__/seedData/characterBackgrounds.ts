import type { BackgroundBase } from "../../src/lib/types/dmToolTypes";
import { acolyteDescription, criminalDescription } from "./descriptions";

export const characterBackgrounds: BackgroundBase[] = [
    {
        id: "churchlurker",
        name: "Acolyte",
        description: acolyteDescription,
        abilityScores: [],
        features: [],
        skillProficiencies: []
    },
    {
        id: "ahcrap",
        name: "Criminal",
        description: criminalDescription,
        abilityScores: [],
        features: [],
        skillProficiencies: []
    }
];