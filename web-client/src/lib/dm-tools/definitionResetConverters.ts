import type { BackgroundDefinition } from "../types/dm-tool-types/definitions/backgroundDefinition";
import type { CharacterClassDefinition } from "../types/dm-tool-types/definitions/characterClassDefinition";
import type { FeatDefinition } from "../types/dm-tool-types/definitions/featDefinition";
import type { LineageDefinition } from "../types/dm-tool-types/definitions/lineageDefinition";
import type { SpeciesDefinition } from "../types/dm-tool-types/definitions/speciesDefinition";
import type { BackgroundInstance } from "../types/dm-tool-types/instances/backgroundInstance";
import type { CharacterClassInstance } from "../types/dm-tool-types/instances/characterClassInstance";
import type { FeatInstance } from "../types/dm-tool-types/instances/featInstance";
import type { LineageInstance } from "../types/dm-tool-types/instances/lineageInstance";
import type { SpeciesInstance } from "../types/dm-tool-types/instances/speciesInstance";


export const classDefinitionReset = (definition: CharacterClassDefinition, id: string): CharacterClassInstance => {
    return {
        id,
        level: 1,
        subclassInstance: null,
        featInstances: definition.featTables.reduce((instances: FeatInstance[], featGroup) => {
            if (featGroup.level <= 1) {
                instances.push(...featGroup.featDefinitions.map((feat) => featDefinitionResest(feat, "")!));
            }

            return instances;
        }, []),
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
        featInstance: featDefinitionResest(definition.featDefinition, "1"),
        selectedItemSet: true,
        definition
    };
}

export const lineageDefinitionReset = (definition: LineageDefinition, id: string): LineageInstance => {
    return {
        id,
        featInstances: definition.featDefinitions.map((feat) => featDefinitionResest(feat, "")!),
        definition
    }
} 

export const speciesDefinitionReset = (definition: SpeciesDefinition, sizes: string[], id: string, lineageId: string): SpeciesInstance => {
    return {
        id,
        featInstances: definition.featDefinitions.map((feat) => featDefinitionResest(feat, "")!),
        size: sizes[0],
        lineageInstance: lineageDefinitionReset(definition.lineageDefinitions[0], lineageId),
        definition
    }
}

export const featDefinitionResest = (definition: FeatDefinition | null, id: string): FeatInstance | null=> {
    if (!definition) {
        return null
    };

    return {
        id,
        effects: definition.availableEffectTables.map((table) => table.effects[0]),
        definition
    }
} 
