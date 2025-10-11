import type { AbilityScoreDefinition } from "./abilityScoreDefinition";
import type { FeatDefinition } from "./featDefinition";
import type { SkillDefinition } from "./skillDefinition";

export interface BackgroundDefinition {
    id: string;
    name: string;
    description: string;
    abilityScoreDefinitions: AbilityScoreDefinition[];
    featDefinition: FeatDefinition;
    skillProficiencies: SkillDefinition[];
}

export interface BackgroundDefinitionDto {
    id: string;
    name: string;
    description: string;
    abilityScoreIds: string[];
    featDefinitionId: string;
    skillDefinitionIds: string[]
}