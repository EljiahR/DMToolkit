import type { BackgroundDefinition } from "../types/dm-tool-types/definitions/backgroundDefinition";
import type { CharacterClassDefinition } from "../types/dm-tool-types/definitions/characterClassDefinition";
import type { LineageDefinition } from "../types/dm-tool-types/definitions/lineageDefinition";
import type { SpeciesDefinition } from "../types/dm-tool-types/definitions/speciesDefinition";
import type { BackgroundInstance } from "../types/dm-tool-types/instances/backgroundInstance";
import type { CharacterClassInstance } from "../types/dm-tool-types/instances/characterClassInstance";
import type { LineageInstance } from "../types/dm-tool-types/instances/lineageInstance";
import type { SpeciesInstance } from "../types/dm-tool-types/instances/speciesInstance";


export const classDefinitionReset = (definition: CharacterClassDefinition, id: string): CharacterClassInstance => {
    return {
        id,
        level: 0,
        subclassInstance: null,
        featInstances: [],
        definition,
        selectedItemSet: true,
        hpRolls: []
    }
}

export const backgroundDefinitionReset = (definition: BackgroundDefinition, id: string): BackgroundInstance => {
    return {
        id,
        abilityScoreDefinitionPlusTwo: null,
        abilityScoreDefinitionPlusOne: null,
        featInstance: null,
        selectedItemSet: true,
        definition
    };
}

export const lineageDefinitionReset = (definition: LineageDefinition, id: string): LineageInstance => {
    return {
        id,
        featInstances: [],
        definition
    }
} 

export const speciesDefinitionReset = (definition: SpeciesDefinition, size: string, id: string, lineageId: string): SpeciesInstance => {
    return {
        id,
        featInstances: [],
        size,
        lineageInstance: lineageDefinitionReset(definition.lineageDefinitions[0], lineageId),
        definition
    }
}
