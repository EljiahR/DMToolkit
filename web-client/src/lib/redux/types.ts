import type { BackgroundBase, CharacterClassBase, LineageBase, SpeciesBase } from "../types/dmToolTypes";

export interface AuthSlice {
    accessToken: string | null;
}

export interface UserSlice {
    username: string | null;
}

export interface DMToolsSlice {
    characterClasses: CharacterClassBase[];
    backgrounds: BackgroundBase[];
    species: SpeciesBase[];
    lineages: LineageBase[];
}
