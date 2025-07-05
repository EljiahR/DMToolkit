import type { Lineage, Species } from "../../src/lib/types/dmToolTypes";
import { versatileFeature } from "./characterFeatures";
import { humanDescription } from "./descriptions";

export const humanHuman: Lineage = {
    name: "Human",
    description: "",
    feature: versatileFeature
}

export const characterSpecies: Species[] = [
    {
        name: "Human",
        description: humanDescription,
        type: "Humanoid",
        speed: 30,
        size: "Medium",
        features: [],
        lineage: humanHuman
    }
];
