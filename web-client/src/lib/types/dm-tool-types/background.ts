import type { Feature, FeatureDefinition, FeatureDto } from "./feature";



export interface BackgroundDefinitionDto {
    id: string;
    name: string;
    description: string;
    abilityScores: string[];
    featureIds: string[];
    skillProficiencies: string[];
}

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