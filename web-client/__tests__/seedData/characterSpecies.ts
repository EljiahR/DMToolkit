import type { LineageDefinition } from "../../src/lib/types/dm-tool-types/definitions/lineageDefinition";
import type { SpeciesDefinition } from "../../src/lib/types/dm-tool-types/definitions/speciesDefinition";
import { elfDescription, humanDescription } from "./descriptions";

export const lineages: LineageDefinition[] = [
    {
        id: "humanhuman",
        name: "Human",
        description: "",
        featDefinitions: [],
    },
    {
        id: "hardfairyboy",
        name: "Wood Elf",
        description: "",
        featDefinitions: [],
    }
]

export const characterSpecies: SpeciesDefinition[] = [
    {
        id: "hboi",
        name: "Human",
        description: humanDescription,
        type: "Humanoid",
        speed: 30,
        size: "Medium",
        featDefinitions: [],
        lineageDefinitions: [lineages[0]]
    },
    {
        id: "fairyman",
        name: "Elf",
        description: elfDescription,
        type: "Humanoid",
        speed: 30,
        size: "Medium",
        featDefinitions: [],
        lineageDefinitions: [lineages[1]]
    }
];
