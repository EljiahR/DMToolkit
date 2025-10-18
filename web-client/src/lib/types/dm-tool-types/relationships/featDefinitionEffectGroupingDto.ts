import type { Effect } from "../entities/effect";

export interface FeatDefinitionEffectGrouping {
    group: number;
    effects: Effect[];
}

export interface FeatDefinitionEffectGroupingDto {
    group: number;
    effectIds: string[];
}