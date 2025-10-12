import type { FeatDefinition } from "./featDefinition";

export interface LineageDefinition {
    id: string;
    name: string;
    description: string;
    featDefinitions: FeatDefinition[];
}

export interface LineageDefinitionDto {
    id: string;
    name: string;
    description: string;
    featDefinitionIds: string[];
}