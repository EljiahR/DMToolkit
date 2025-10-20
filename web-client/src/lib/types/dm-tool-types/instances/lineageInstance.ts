import type { LineageDefinition } from "../definitions/lineageDefinition";
import type { FeatInstance, FeatInstanceDto } from "./featInstance";

export interface LineageInstance {
    id: string;
    featInstances: FeatInstance[];
    definition: LineageDefinition;
}

export interface LineageInstanceDto {
    id: string;
    featInstances: FeatInstanceDto[];
    definitionId: string;
}