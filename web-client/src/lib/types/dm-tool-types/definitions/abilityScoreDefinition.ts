import type { SkillDefinition, SkillDefinitionDto } from "./skillDefinition";

export interface AbilityScoreDefinition{
    id: string;
    name: string;
    abbreviation: string;
    description: string;
    skillDefinitions: SkillDefinition[];
}

export interface AbilityScoreDefinitionDto {
    id: string;
    name: string;
    abbreviation: string;
    description: string;
    skillDefinitions: SkillDefinitionDto[];
}