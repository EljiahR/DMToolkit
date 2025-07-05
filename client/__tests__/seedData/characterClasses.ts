import type { CharacterClass } from "../../src/lib/types/dmToolTypes";
import { barbarianDescription, wizardDescription } from "./classDescriptions";

export const characterClasses: CharacterClass[] = [
    {
        name: "Barbarian",
        description: barbarianDescription,
        level: 1,
        features: []
    },
    {
        name: "Wizard",
        description: wizardDescription,
        level: 1,
        features: []
    }
];