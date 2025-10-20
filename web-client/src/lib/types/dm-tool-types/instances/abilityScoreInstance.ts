import type { AbilityScoreDefinition } from "../definitions/abilityScoreDefinition";
import type { SkillInstance, SkillInstanceDto } from "./skillInstance";

export interface AbilityScoreInstance {
    id: string;
    score: number;
    isProficient: boolean;
    skillInstances: SkillInstance[];
    definition: AbilityScoreDefinition;
}

export interface AbilityScoreInstanceDto {
    id: string;
    score: number;
    isProficient: boolean;
    skillInstances: SkillInstanceDto[];
    definitionId: string;
}