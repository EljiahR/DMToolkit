import type { AbilityScores, Background, BackgroundBase, CharacterClassBase, LineageBase, SpeciesBase } from "../types/dmToolTypes";

export interface AuthSlice {
    accessToken: string | null;
}

export interface UserSlice {
    username: string | null;
}

export interface NewCharacterSlice {
    alignment: string;
    characterClassBase: CharacterClassBase |  null;
    backgroundBase: BackgroundBase | null;
    backgroundInstance: Background;
    speciesBase: SpeciesBase | null;
    lineageBase: LineageBase | null;
    scores: AbilityScores;
    physicalDescription: string;
    personality: string;
    ideals: string;
    bonds: string;
    flaws: string;
}

export interface DMToolsSlice {
    characterClasses: CharacterClassBase[];
    backgrounds: BackgroundBase[];
    species: SpeciesBase[];
    lineages: LineageBase[];
}