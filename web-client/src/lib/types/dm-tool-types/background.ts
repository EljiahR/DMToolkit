import type { Feature, FeatureBase, FeatureDto } from "./feature";

export interface BackgroundBase {
    id: string;
    name: string;
    description: string;
    abilityScores: string[];
    features: FeatureBase[];
    skillProficiencies: string[];
}

export interface Background {
    id: string;
    abilityScores: [string, string];
    features: Feature[];
    skillProficiencies: string[];
    base: BackgroundBase;
}

export interface BackgroundBaseDto {
    id: string;
    name: string;
    description: string;
    abilityScores: string[];
    featureIds: string[];
    skillProficiencies: string[];
}

export interface BackgroundDto {
    id: string;
    name: string;
    description: string;
    abilityScores: [string, string];
    features: FeatureDto[];
    featureInstanceIds: string[];
    skillProficiencies: string[];
    baseId: string;
}