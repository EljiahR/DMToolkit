import type { CharacterClassBase } from "../../src/lib/types/dmToolTypes";
import { barbarianDescription, wizardDescription } from "./descriptions";

export const characterClasses: CharacterClassBase[] = [
    {
        id: "beefcake",
        name: "Barbarian",
        description: barbarianDescription,
        features: [],
        subclasses: [],
        defaultScoreArray: []
    },
    {
        id: "cheating",
        name: "Wizard",
        description: wizardDescription,
        features: [],
        subclasses: [],
        defaultScoreArray: []
    }
];