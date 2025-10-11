import type { BackgroundDefinition } from "./definitions/backgroundDefinition";
import type { Feature, FeatureDto } from "./feature";

export interface Background {
    id: string;
    abilityScores: [string, string];
    features: Feature[];
    skillProficiencies: string[];
    base: BackgroundDefinition;
}

export interface BackgroundDto {
    id: string;
    abilityScores: [string, string];
    features: FeatureDto[];
    featureInstanceIds: string[];
    skillProficiencies: string[];
    baseId: string;
}