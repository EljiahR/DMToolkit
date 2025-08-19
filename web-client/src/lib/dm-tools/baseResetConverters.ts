import type { Background, BackgroundBase } from "../types/dm-tool-types/background";
import type { CharacterClass, CharacterClassBase } from "../types/dm-tool-types/characterClass";
import type { Lineage, LineageBase, Species, SpeciesBase } from "../types/dm-tool-types/species";


export const classBaseReset = (characterClass: CharacterClassBase, id: string): CharacterClass => {
    return {
        id,
        level: 0,
        subclass: null,
        features: [],
        base: characterClass
    }
}

export const backgroundBaseReset = (base: BackgroundBase, id: string): Background => {
    return {
        id,
        abilityScores: ["", ""],
        features: [],
        skillProficiencies: [],
        base
    };
}

export const lineageBaseReset = (lineage: LineageBase, id: string): Lineage => {
    return {
        id,
        features: [],
        base: lineage
    }
} 

export const speciesBaseReset = (species: SpeciesBase, id: string, lineageId: string): Species => {
    return {
        id,
        features: [],
        lineage: lineageBaseReset(species.lineages[0], lineageId),
        base: species
    }
}
