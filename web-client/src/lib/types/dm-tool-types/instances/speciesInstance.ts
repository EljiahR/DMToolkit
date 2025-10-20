import type { SpeciesDefinition } from "../definitions/speciesDefinition";
import type { FeatInstance, FeatInstanceDto } from "./featInstance";
import type { LineageInstance, LineageInstanceDto } from "./lineageInstance";

export interface SpeciesInstance {
    id: string;
    size: string;
    lineageInstance: LineageInstance | null;
    featInstances: FeatInstance[];
    definition: SpeciesDefinition;
}

export interface SpeciesInstanceDto {
    id: string;
    size: string;
    lineageInstance: LineageInstanceDto | null;
    featInstances: FeatInstanceDto[];
    definitionId: string;
}