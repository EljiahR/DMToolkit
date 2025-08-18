import type { BackgroundBase } from "../../src/lib/types/dm-tool-types/character";
import { evangalistDescription, thugDescription } from "./descriptions";

export const characterBackgrounds: BackgroundBase[] = [
    {
        id: "churchlurker",
        name: "Evangalist",
        description: evangalistDescription,
        abilityScores: ["int", "wis", "cha"],
        features: [],
        skillProficiencies: []
    },
    {
        id: "ahcrap",
        name: "Thug",
        description: thugDescription,
        abilityScores: ["dex", "con", "int"],
        features: [],
        skillProficiencies: []
    }
];