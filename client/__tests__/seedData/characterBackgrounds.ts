import type { BackgroundBase } from "../../src/lib/types/dmToolTypes";
import { acolyteDescription, criminalDescription } from "./descriptions";

export const acolyteBackground: BackgroundBase = {
    id: "churchlurker",
    name: "Acolyte",
    description: acolyteDescription,
    abilityScores: [],
    features: [],
    skillProficiencies: []
}

export const criminalBackground: BackgroundBase = {
    id: "ahcrap",
    name: "Criminal",
    description: criminalDescription,
    abilityScores: [],
    features: [],
    skillProficiencies: []
}