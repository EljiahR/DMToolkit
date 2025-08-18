import type { LineageBase, SpeciesBase } from "../../src/lib/types/dm-tool-types/character";
import { elfDescription, humanDescription } from "./descriptions";

export const lineages: LineageBase[] = [
    {
        id: "humanhuman",
        name: "Human",
        description: "",
        features: [],
        speciesId: "hboi"
    },
    {
        id: "hardfairyboy",
        name: "Wood Elf",
        description: "",
        features: [],
        speciesId: "fairyman"
    }
]

export const characterSpecies: SpeciesBase[] = [
    {
        id: "hboi",
        name: "Human",
        description: humanDescription,
        type: "Humanoid",
        speed: 30,
        size: "Medium",
        features: [],
        lineages: [lineages[0]]
    },
    {
        id: "fairyman",
        name: "Elf",
        description: elfDescription,
        type: "Humanoid",
        speed: 30,
        size: "Medium",
        features: [],
        lineages: [lineages[1]]
    }
];
