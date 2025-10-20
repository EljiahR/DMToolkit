import type { FeatDefinition } from "../definitions/featDefinition";
import type { Effect } from "../entities/effect";

export interface FeatInstance {
    id: string;
    effects: Effect[];
    definition: FeatDefinition;
}

export interface FeatInstanceDto {
    id: string;
    effectIds: string[];
    definitionId: string;
}