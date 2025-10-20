import type { SubclassDefinition } from "../definitions/subclassDefinition";
import type { FeatInstance, FeatInstanceDto } from "./featInstance";

export interface SubclassInstance {
    id: string;
    featInstances: FeatInstance[];
    definition: SubclassDefinition;
}

export interface SubclassInstanceDto {
    id: string;
    featInstances: FeatInstanceDto[];
    definitionId: string;
}