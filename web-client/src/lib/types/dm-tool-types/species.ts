import type { Feature, FeatureBase, FeatureDto } from "./feature";

export interface LineageBase {
    id: string;
    name: string;
    description: string;
    features: FeatureBase[];
    speciesId: string;
}

export interface Lineage {
    id: string;
    features: Feature[];
    base: LineageBase;
}

export interface SpeciesBase {
    id: string;
    name: string;
    description: string;
    type: string;
    speed: number;
    size: string;
    features: FeatureBase[];
    lineages: LineageBase[];
}

export interface Species {
    id: string;
    features: Feature[];
    lineage: Lineage;
    base: SpeciesBase;
}

export interface LineageBaseDto {
    id: string;
    name: string;
    description: string;
    featureIds: string[];
    speciesId: string;
}

export interface SpeciesBaseDto {
    id: string;
    name: string;
    description: string;
    type: string;
    speed: number;
    size: string;
    featureIds: string[];
    lineageIds: string[];
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
