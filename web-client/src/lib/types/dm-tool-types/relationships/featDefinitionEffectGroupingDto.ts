import type { FeatEffect } from "../entities/effect";

export interface FeatDefinitionEffectGrouping {
    group: number;
    featEffects: FeatEffect[];
}

export interface FeatDefinitionEffectGroupingDto {
    group: number;
    featEffectIds: string[];
}