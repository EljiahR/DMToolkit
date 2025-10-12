import type { Background } from "../types/dm-tool-types/background";
import type { CharacterClass } from "../types/dm-tool-types/characterClass";
import type { BackgroundDefinition } from "../types/dm-tool-types/definitions/backgroundDefinition";
import type { CharacterClassDefinition } from "../types/dm-tool-types/definitions/characterClassDefinition";
import type { LineageDefinition } from "../types/dm-tool-types/definitions/lineageDefinition";
import type { SpeciesDefinition } from "../types/dm-tool-types/definitions/speciesDefinition";
import type { Lineage, Species } from "../types/dm-tool-types/species";


export const classBaseReset = (characterClass: CharacterClassDefinition, id: string): CharacterClass => {
    return {
        id,
        level: 0,
        subclass: null,
        features: [],
        base: characterClass
    }
}

export const backgroundBaseReset = (base: BackgroundDefinition, id: string): Background => {
    return {
        id,
        abilityScores: ["", ""],
        features: [],
        skillProficiencies: [],
        base
    };
}

export const lineageBaseReset = (lineage: LineageDefinition, id: string): Lineage => {
    return {
        id,
        features: [],
        definition: lineage
    }
} 

export const speciesBaseReset = (species: SpeciesDefinition, id: string, lineageId: string): Species => {
    return {
        id,
        features: [],
        lineage: lineageBaseReset(species.lineageDefinitions[0], lineageId),
        definition: species
    }
}
