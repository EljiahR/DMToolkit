import { getStandardScores } from "../dm-tools/abilityScoreConstructors";
import { Copper, Electum, Gold, Platinum, Silver } from "../dm-tools/staticElements";
import type { BackgroundDefinition } from "../types/dm-tool-types/definitions/backgroundDefinition";
import type { CharacterClassDefinition } from "../types/dm-tool-types/definitions/characterClassDefinition";
import type { LineageDefinition } from "../types/dm-tool-types/definitions/lineageDefinition";
import type { SpeciesDefinition } from "../types/dm-tool-types/definitions/speciesDefinition";
import type { BackgroundInstance } from "../types/dm-tool-types/instances/backgroundInstance";
import type { Character } from "../types/dm-tool-types/instances/character";
import type { CharacterClassInstance } from "../types/dm-tool-types/instances/characterClassInstance";
import type { LineageInstance } from "../types/dm-tool-types/instances/lineageInstance";
import type { SpeciesInstance } from "../types/dm-tool-types/instances/speciesInstance";
import type { Worth } from "../types/dm-tool-types/items/bases/worth";

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
    itemDefinitionBaseQuantities: [],
    startingGp: 0
}

const characterClass: CharacterClassInstance = {
    id: "0",
    level: 0,
    subclassInstance: null,
    featInstances: [],
    definition: defaultCharacterClassDefinition,
    hpRolls: []
}

const defaultBackgroundDefinition: BackgroundDefinition = {
    id: "default",
    name: "Default",
    description: "Default background used for initializng the initial state of the selectedCharacter slice",
    abilityScoreDefinitions: [],
    featDefinition: null,
    skillProficiencies: []
}

const background: BackgroundInstance = {
    id: "0",
    abilityScoreDefinitionPlusTwo: null,
    abilityScoreDefinitionPlusOne: null,
    featInstance: null,
    definition: defaultBackgroundDefinition
}

const defaultLineageDefinition: LineageDefinition = {
    id: "default",
    name: "Default",
    description: "Default lineage used for initializng the initial state of the selectedCharacter slice",
    featDefinitions: [],
}

const lineageInstance: LineageInstance = {
    id: "0",
    featInstances: [],
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

const species: SpeciesInstance = {
    id: "0",
    featInstances: [],
    size: "",
    lineageInstance,
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
        tempHp: 0, 
        characterClassInstances: [characterClass],
        backgroundInstance: background,
        speciesInstance: species,
        scores: getStandardScores(),
        physicalDescription: "",
        personality: "",
        ideals: "",
        bonds: "",
        flaws: "",
        coins: generateEmptyWallet(),
        inventory: [],
        characterSpells: []
    };
} 
