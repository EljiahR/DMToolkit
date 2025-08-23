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
export type CharacterCreationNavigationIndexes = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export const CharacterCreationNavigationOptions = ["Start", "Classes", "Backgrounds", "Species", "Ability Scores", "Alignments", "Descriptions", "Finish"];

export interface UISlice {
    characterDisplayNavigation: CharacterDisplayNavigationOptions;
    characterCreationNavigationIndex: CharacterCreationNavigationIndexes;
}
