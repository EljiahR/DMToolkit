import type { AbilityScoreInstance } from "../types/dm-tool-types/instances/abilityScoreInstance";
import type { FeatInstance } from "../types/dm-tool-types/instances/featInstance";

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
    mobileMenuIsVisible: boolean;
}

export type AbilityScoreAbbreviations = "str" | "dex" | "con" | "int" | "wis" | "cha";

export interface AllAbilityScoreDisplay {
    str: AbilityScoreDisplay;
    dex: AbilityScoreDisplay;
    con: AbilityScoreDisplay;
    int: AbilityScoreDisplay;
    wis: AbilityScoreDisplay;
    cha: AbilityScoreDisplay;
}

export interface AbilityScoreDisplay {
    instance: AbilityScoreInstance;
    totalScore: number;
    bonusFromBackground: number;
    bonusesFromFeats: BonusFromFeat[];
    modifier: number;
}

export interface BonusFromFeat {
    amount: number;
    featInstance: FeatInstance | null;
}
