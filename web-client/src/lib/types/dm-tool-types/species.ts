import type { Feature, FeatureBase } from "./feature";

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