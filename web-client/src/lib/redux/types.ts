import type { BackgroundDefinition } from "../types/dm-tool-types/definitions/backgroundDefinition";
import type { CharacterClassDefinition } from "../types/dm-tool-types/definitions/characterClassDefinition";
import type { SpeciesDefinition } from "../types/dm-tool-types/definitions/speciesDefinition";

export interface AuthSlice {
    accessToken: string | null;
}

export interface UserSlice {
    username: string | null;
}

export interface DMToolsSlice {
    characterClassDefinitions: CharacterClassDefinition[];
    backgroundDefinitions: BackgroundDefinition[];
    speciesDefinitions: SpeciesDefinition[];
}

export type CharacterDisplayNavigationOptions = "Overview" | "Stats" | "Combat" | "Feats" | "Spells" | "Inventory";
export type CharacterCreationNavigationIndexes = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export const CharacterCreationNavigationOptions = ["Start", "Classes", "Backgrounds", "Species", "Ability Scores", "Alignments", "Descriptions", "Finish"];

export interface UISlice {
    characterDisplayNavigation: CharacterDisplayNavigationOptions;
    characterCreationNavigationIndex: CharacterCreationNavigationIndexes;
}
