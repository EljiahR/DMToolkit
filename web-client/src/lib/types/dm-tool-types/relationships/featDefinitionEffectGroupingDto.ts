import type { FeatEffect } from "../entities/featEffect";

export interface FeatDefinitionEffectGrouping {
    group: number;
    featEffects: FeatEffect[];
}

export interface FeatDefinitionEffectGroupingDto {
    group: number;
    featEffectIds: string[];
}