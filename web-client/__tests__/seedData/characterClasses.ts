import type { CharacterClassBase } from "../../src/lib/types/dm-tool-types/character";
import { barbarianDescription, wizardDescription } from "./descriptions";

export const characterClasses: CharacterClassBase[] = [
    {
        id: "beefcake",
        name: "Barbarian",
        description: barbarianDescription,
        features: [],
        subclasses: [],
        defaultScoreArray: [15, 13, 14, 12, 10, 8]
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