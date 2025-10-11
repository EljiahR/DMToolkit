import type { LineageDefinition } from "./definitions/lineageDefinition";
import type { SpeciesDefinition } from "./definitions/speciesDefinition";
import type { Feature, FeatureDto } from "./feature";

export interface Lineage {
    id: string;
    features: Feature[];
    base: LineageDefinition;
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
