import type { CharacterClassDefinition } from "../definitions/characterClassDefinition";
import type { FeatInstance, FeatInstanceDto } from "./featInstance";
import type { SubclassInstance, SubclassInstanceDto } from "./subclassInstance";

export interface CharacterClassInstance {
    id: string;
    level: number;
    hpRolls: number[];
    featInstances: FeatInstance[];
    subclassInstance: SubclassInstance | null;
    selectedItemSet: boolean;
    definition: CharacterClassDefinition;
}

export interface CharacterClassInstanceDto {
    id: string;
    level: number;
    hpRolls: number[];
    featInstances: FeatInstanceDto[];
    subclassInstance: SubclassInstanceDto | null;
    selectedItemSet: boolean;
    definitionId: string;
}