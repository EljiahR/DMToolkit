import type { Feature, FeatureDefinition, FeatureDto } from "./feature";

export interface LineageDefinition {
    id: string;
    name: string;
    description: string;
    features: FeatureDefinition[];
    speciesId: string;
}

export interface LineageDefinitionDto {
    id: string;
    name: string;
    description: string;
    featureIds: string[];
    speciesId: string;
}

export interface Lineage {
    id: string;
    features: Feature[];
    base: LineageDefinition;
}

export interface SpeciesDefinition {
    id: string;
    name: string;
    description: string;
    type: string;
    speed: number;
    size: string;
    features: FeatureDefinition[];
    lineages: LineageDefinition[];
}

export interface SpeciesDefinitionDto {
    id: string;
    name: string;
    description: string;
    type: string;
    speed: number;
    size: string;
    featureIds: string[];
    lineageIds: string[];
}

export interface Species {
    id: string;
    features: Feature[];
    lineage: Lineage;
    base: SpeciesDefinition;
}





export interface LineageDto {
    id: string;
    features: FeatureDto[];
    featureInstanceIds: string[];
    speciesInstanceId: string;
    baseId: string;
}

export interface SpeciesDto {
    id: string;
    features: FeatureDto[];
    featureInstanceIds: string[];
    lineage: LineageDto;
    lineageInstanceId: string;
    baseId: string;
}
