import { getStandardScores } from "../dm-tools/abilityScoreConstructors";
import type { Background, BackgroundBase, Character, CharacterClass, CharacterClassBase, Lineage, LineageBase, Species, SpeciesBase } from "../types/dm-tool-types/character";

const characterClassBase: CharacterClassBase = {
    id: "default",
    name: "Default",
    description: "Default class used for initializng the initial state of the selectedCharacter slice",
    subclasses: [],
    features: [],
    defaultScoreArray: []
}

const characterClass: CharacterClass = {
    id: "0",
    level: 0,
    subclass: null,
    features: [],
    base: characterClassBase
}

const backgroundBase: BackgroundBase = {
    id: "default",
    name: "Default",
    description: "Default background used for initializng the initial state of the selectedCharacter slice",
    abilityScores: [],
    features: [],
    skillProficiencies: []
}

const background: Background = {
    id: "0",
    abilityScores: ["", ""],
    features: [],
    skillProficiencies: [],
    base: backgroundBase
}

const lineageBase: LineageBase = {
    id: "default",
    name: "Default",
    description: "Default lineage used for initializng the initial state of the selectedCharacter slice",
    features: [],
    speciesId: "default"
}

const lineage: Lineage = {
    id: "0",
    features: [],
    base: lineageBase
}

const speciesBase: SpeciesBase = {
    id: "default",
    name: "Default",
    description: "Default species used for initializng the initial state of the selectedCharacter slice",
    type: "none",
    speed: 0,
    size: "none",
    features: [],
    lineages: [lineageBase]
}

const species: Species = {
    id: "0",
    features: [],
    lineage,
    base: speciesBase
}

export const generateEmptyCharacter = (): Character => {
    return {
        id: "0",
        name: "",
        alignment: "unaligned",
        characterClass,
        background,
        species,
        scores: getStandardScores(),
        physicalDescription: "",
        personality: "",
        ideals: "",
        bonds: "",
        flaws: "",
        proficiencyBonus: 0
    };
} 
