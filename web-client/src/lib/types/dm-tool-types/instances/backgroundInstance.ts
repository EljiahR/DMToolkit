import type { AbilityScoreDefinition } from "../definitions/abilityScoreDefinition";
import type { BackgroundDefinition } from "../definitions/backgroundDefinition";
import type { FeatInstance, FeatInstanceDto } from "./featInstance";

export interface BackgroundInstance {
    id: string;
    abilityScoreDefinitionPlusTwo: AbilityScoreDefinition | null;
    abilityScoreDefinitionPlusOne: AbilityScoreDefinition | null;
    featInstance: FeatInstance | null;
    selectedItemSet: boolean;
    definition: BackgroundDefinition;
}

export interface BackgroundInstanceDto {
    id: string;
    abilityScoreDefinitionPlusTwoId: string;
    abilityScoreDefinitionPlusOneId: string;
    featInstance: FeatInstanceDto;
    selectedItemSet: boolean;
    definitionId: string;
}