import type { ItemDefinitionBaseQuantityDto } from "../relationships/itemDefinitionBaseQuantity";
import type { AbilityScoreDefinition } from "./abilityScoreDefinition";
import type { FeatDefinition } from "./featDefinition";
import type { SkillDefinition } from "./skillDefinition";

export interface BackgroundDefinition {
    id: string;
    name: string;
    description: string;
    abilityScoreDefinitions: AbilityScoreDefinition[];
    featDefinition: FeatDefinition | null;
    skillProficiencies: SkillDefinition[];
}

export interface BackgroundDefinitionDto {
    id: string;
    name: string;
    description: string;
    abilityScoreDefinitionIds: string[];
    featDefinitionId: string;
    skillDefinitionIds: string[]
    startingGp: number;
    itemDefinitionBaseQuantities: ItemDefinitionBaseQuantityDto[];
}