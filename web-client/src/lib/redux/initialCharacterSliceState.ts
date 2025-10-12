import { getStandardScores } from "../dm-tools/abilityScoreConstructors";
import { Copper, Electum, Gold, Platinum, Silver } from "../dm-tools/staticElements";
import type { Background } from "../types/dm-tool-types/background";
import type { Character } from "../types/dm-tool-types/character";
import type { CharacterClass, } from "../types/dm-tool-types/characterClass";
import type { BackgroundDefinition } from "../types/dm-tool-types/definitions/backgroundDefinition";
import type { CharacterClassDefinition } from "../types/dm-tool-types/definitions/characterClassDefinition";
import type { LineageDefinition } from "../types/dm-tool-types/definitions/lineageDefinition";
import type { SpeciesDefinition } from "../types/dm-tool-types/definitions/speciesDefinition";
import type { Worth } from "../types/dm-tool-types/items";
import type { Lineage, Species } from "../types/dm-tool-types/species";

const defaultCharacterClassDefinition: CharacterClassDefinition = {
    id: "default",
    name: "Default",
    hitDie: 1,
    fixedHp: 1,
    description: "Default class used for initializng the initial state of the selectedCharacter slice",
    subclassDefinitions: [],
    featTables: [],
    defaultStr: 8,
    defaultDex: 8,
    defaultCon: 8,
    defaultInt: 8,
    defaultWis: 8,
    defaultCha: 8,
    itemSetA: null,
    itemSetB: null
}

const characterClass: CharacterClass = {
    id: "0",
    level: 0,
    subclass: null,
    features: [],
    base: defaultCharacterClassDefinition
}

const defaultBackgroundDefinition: BackgroundDefinition = {
    id: "default",
    name: "Default",
    description: "Default background used for initializng the initial state of the selectedCharacter slice",
    abilityScoreDefinitions: [],
    featDefinition: null,
    skillProficiencies: []
}

const background: Background = {
    id: "0",
    abilityScores: ["", ""],
    features: [],
    skillProficiencies: [],
    base: defaultBackgroundDefinition
}

const defaultLineageDefinition: LineageDefinition = {
    id: "default",
    name: "Default",
    description: "Default lineage used for initializng the initial state of the selectedCharacter slice",
    featDefinitions: [],
}

const lineage: Lineage = {
    id: "0",
    features: [],
    definition: defaultLineageDefinition
}

const defaultSpeciesDefinition: SpeciesDefinition = {
    id: "default",
    name: "Default",
    description: "Default species used for initializng the initial state of the selectedCharacter slice",
    type: "none",
    speed: 0,
    size: "none",
    featDefinitions: [],
    lineageDefinitions: [defaultLineageDefinition]
}

const species: Species = {
    id: "0",
    features: [],
    lineage,
    definition: defaultSpeciesDefinition
}

export const generateEmptyWallet = (): Worth => {
    return {
        cp: JSON.parse(JSON.stringify(Copper)),
        sp: JSON.parse(JSON.stringify(Silver)),
        ep: JSON.parse(JSON.stringify(Electum)),
        gp: JSON.parse(JSON.stringify(Gold)),
        pp: JSON.parse(JSON.stringify(Platinum))
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
        equippedItems: [],
        knownSpells: [],
        readiedSpells: []
    };
} 
