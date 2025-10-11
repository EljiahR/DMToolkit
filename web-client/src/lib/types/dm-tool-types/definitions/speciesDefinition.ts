import type { FeatDefinition } from "./featDefinition";
import type { LineageDefinition, LineageDefinitionDto } from "./lineageDefinition";

export interface SpeciesDefinition {
    id: string;
    name: string;
    description: string;
    type: string;
    speed: number;
    size: string;
    feats: FeatDefinition[];
    lineages: LineageDefinition[];
}

export interface SpeciesDefinitionDto {
    id: string;
    name: string;
    description: string;
    type: string;
    speed: number;
    size: string;
    featIds: string[];
    lineages: LineageDefinitionDto[];
}