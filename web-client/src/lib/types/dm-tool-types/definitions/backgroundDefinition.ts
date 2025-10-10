import type { FeatureDefinition } from "../feature";
import type { AbilityScoreDefinition } from "./abilityScoreDefinition";
import type { SkillDefinition } from "./skillDefinition";

export interface BackgroundDefinition {
    id: string;
    name: string;
    description: string;
    abilityScoreDefinitions: AbilityScoreDefinition[];
    featureDefinition: FeatureDefinition;
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