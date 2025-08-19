import type { BackgroundBase } from "../types/dm-tool-types/background";
import type { CharacterClassBase } from "../types/dm-tool-types/characterClass";
import type { LineageBase, SpeciesBase } from "../types/dm-tool-types/species";

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

export type CharacterDisplayNavigationOptions = "Overview" | "Stats" | "Combat" | "Feats" | "Spells" | "Inventory";

export interface UISlice {
    characterDisplayNavigation: CharacterDisplayNavigationOptions
}
