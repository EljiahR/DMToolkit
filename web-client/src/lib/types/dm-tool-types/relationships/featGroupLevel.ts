import type { FeatDefinition } from "../definitions/featDefinition";

export interface FeatGroupLevel {
    level: number;
    group: number;
    featDefinitions: FeatDefinition[];
}

export interface FeatGroupLevelDto {
    level: number;
    group: number;
    featDefinitionIds: string[];
}