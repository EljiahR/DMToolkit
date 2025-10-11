import type { AbilityScoreDefinition } from "./definitions/abilityScoreDefinition";
import type { SkillDefinition } from "./definitions/skillDefinition";

export interface SkillInstance {
    id: string;
    proficient: boolean;
    definition: SkillDefinition;
}

export interface AbilityScoreInstance {
    id: string;
    amount: number;
    proficient: boolean;
    skillInstances: SkillInstance[];
    definition: AbilityScoreDefinition
}

export interface AbilityScores {
    [key: string]: AbilityScoreInstance;
    "str": AbilityScoreInstance;
    "dex": AbilityScoreInstance;
    "con": AbilityScoreInstance;
    "int": AbilityScoreInstance;
    "wis": AbilityScoreInstance;
    "cha": AbilityScoreInstance;
}

export interface SkillInstanceDto {
    id: string;
    proficient: boolean;
    definitionId: string;
}

export interface AbilityScoreInstanceDto {
    id: string;
    amount: number;
    proficient: boolean;
    skillInstances: SkillInstanceDto[];
    definitionId: string;
}
