import type { LineageDefinition } from "./definitions/lineageDefinition";
import type { SpeciesDefinition } from "./definitions/speciesDefinition";
import type { Feature, FeatureDto } from "./feature";

export interface Lineage {
    id: string;
    features: Feature[];
    definition: LineageDefinition;
}

export interface Species {
    id: string;
    features: Feature[];
    lineage: Lineage;
    definition: SpeciesDefinition;
}

export interface LineageDto {
    id: string;
    features: FeatureDto[];
    featureInstanceIds: string[];
    definitionId: string;
}

export interface SpeciesDto {
    id: string;
    features: FeatureDto[];
    featureInstanceIds: string[];
    lineage: LineageDto;
    lineageInstanceId: string;
    definitionId: string;
}
