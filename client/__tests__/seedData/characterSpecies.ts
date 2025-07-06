import type { Lineage, Species } from "../../src/lib/types/dmToolTypes";
import { elfDescription, humanDescription } from "./descriptions";

export const versatile: Lineage = {
    name: "Human",
    description: "",
    features: []
}

export const woodElf: Lineage = {
    name: "Wood Elf",
    description: "",
    features: []
}

export const characterSpecies: Species[] = [
    {
        name: "Human",
        description: humanDescription,
        type: "Humanoid",
        speed: 30,
        size: "Medium",
        features: [],
        lineage: versatile
    },
    {
        name: "Elf",
        description: elfDescription,
        type: "Humanoid",
        speed: 30,
        size: "Medium",
        features: [],
        lineage: woodElf
    }
];
