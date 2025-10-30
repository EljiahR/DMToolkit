import type { FeatDefinition } from "./featDefinition";
import type { LineageDefinition, LineageDefinitionDto } from "./lineageDefinition";

export interface SpeciesDefinition {
    id: string;
    name: string;
    description: string;
    type: string;
    speed: number;
    sizes: string[];
    featDefinitions: FeatDefinition[];
    lineageDefinitions: LineageDefinition[];
}

export interface SpeciesDefinitionDto {
    id: string;
    name: string;
    description: string;
    type: string;
    speed: number;
    sizes: string[];
    featDefinitionIds: string[];
    lineageDefinitions: LineageDefinitionDto[];
}