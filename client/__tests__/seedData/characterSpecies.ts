import type { LineageBase, SpeciesBase } from "../../src/lib/types/dmToolTypes";
import { elfDescription, humanDescription } from "./descriptions";

export const versatile: LineageBase = {
    id: "humanhuman",
    name: "Human",
    description: "",
    features: [],
    speciesId: "hboi"
}

export const woodElf: LineageBase = {
    id: "hardfairyboy",
    name: "Wood Elf",
    description: "",
    features: [],
    speciesId: "fairyman"
}

export const characterSpecies: SpeciesBase[] = [
    {
        id: "hboi",
        name: "Human",
        description: humanDescription,
        type: "Humanoid",
        speed: 30,
        size: "Medium",
        features: [],
        lineages: [versatile]
    },
    {
        id: "fairyman",
        name: "Elf",
        description: elfDescription,
        type: "Humanoid",
        speed: 30,
        size: "Medium",
        features: [],
        lineages: [woodElf]
    }
];
