import type { FeatEffect } from "../entities/featEffect";
import type { FeatDefinitionEffectGroupingDto } from "../relationships/featDefinitionEffectGroupingDto";

export interface FeatDefinition {
    id: string;
    name: string;
    description: string;
    effects: FeatEffect[];
}

export interface FeatDefinitionDto {
    id: string;
    name: string;
    description: string;
    avaibleEffectTables: FeatDefinitionEffectGroupingDto[];
}