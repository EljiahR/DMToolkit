import type { FeatDefinition } from "./featDefinition";

export interface LineageDefinition {
    id: string;
    name: string;
    description: string;
    feats: FeatDefinition[];
}

export interface LineageDefinitionDto {
    id: string;
    name: string;
    description: string;
    featIds: string[];
}