export interface AuthSlice {
    accessToken: string | null;
}

export interface UserSlice {
    username: string | null;
}

export type CharacterDisplayNavigationOptions = "Overview" | "Stats" | "Combat" | "Feats" | "Spells" | "Inventory";
export type CharacterCreationNavigationIndexes = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export const CharacterCreationNavigationOptions = ["Start", "Classes", "Backgrounds", "Species", "Ability Scores", "Alignments", "Descriptions", "Finish"];

export interface UISlice {
    characterDisplayNavigation: CharacterDisplayNavigationOptions;
    characterCreationNavigationIndex: CharacterCreationNavigationIndexes;
}
