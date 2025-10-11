import type { FeatDefinitionEffectGrouping, FeatDefinitionEffectGroupingDto } from "../relationships/featDefinitionEffectGroupingDto";

export interface FeatDefinition {
    id: string;
    name: string;
    description: string;
    availableEffectTables: FeatDefinitionEffectGrouping[];
}

export interface FeatDefinitionDto {
    id: string;
    name: string;
    description: string;
    availableEffectTables: FeatDefinitionEffectGroupingDto[];
}