import type { AbilityScores, BackgroundBase, CharacterClassBase, LineageBase, SpeciesBase } from "../types/dmToolTypes";

export interface AuthSlice {
    accessToken: string | null;
}

export interface UserSlice {
    username: string | null;
}

export interface NewCharacterSlice {
    characterClassBase: CharacterClassBase |  null;
    backgroundBase: BackgroundBase | null;
    speciesBase: SpeciesBase | null;
    lineageBase: LineageBase | null;
    scores: AbilityScores;
}

export interface DMToolsSlice {
    characterClass: CharacterClassBase[];
    background: BackgroundBase[];
    species: SpeciesBase[];
    lineages: LineageBase[];
}