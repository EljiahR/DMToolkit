import type { SkillDefinition } from "../definitions/skillDefinition";

export interface SkillInstance {
    id: string;
    isProficient: boolean;
    definition: SkillDefinition;
}

export interface SkillInstanceDto {
    id: string;
    isProficient: boolean;
    definitionId: string;
}