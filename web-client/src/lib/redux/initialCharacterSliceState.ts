import { getStandardScores } from "../dm-tools/abilityScoreConstructors";
import type { Background, BackgroundBase } from "../types/dm-tool-types/background";
import type { Character } from "../types/dm-tool-types/character";
import type { CharacterClass, CharacterClassBase } from "../types/dm-tool-types/characterClass";
import type { Worth } from "../types/dm-tool-types/items";
import type { Lineage, LineageBase, Species, SpeciesBase } from "../types/dm-tool-types/species";

const characterClassBase: CharacterClassBase = {
    id: "default",
    name: "Default",
    hitDie: 1,
    fixedHp: 1,
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

export const generateEmptyWallet = (): Worth => {
    return {
        cp: 0,
        sp: 0,
        ep: 0,
        gp: 0,
        pp: 0
    }
}

export const generateEmptyCharacter = (): Character => {
    return {
        id: "0",
        name: "",
        alignment: "unaligned",
        hp: 1,
        hpRolls: [1],
        tempHp: 0, 
        characterClass,
        background,
        species,
        scores: getStandardScores(),
        physicalDescription: "",
        personality: "",
        ideals: "",
        bonds: "",
        flaws: "",
        proficiencyBonus: 0,
        coins: generateEmptyWallet(),
        inventory: [],
        equippedItems: []
    };
} 
