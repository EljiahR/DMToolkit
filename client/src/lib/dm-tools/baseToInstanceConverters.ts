import type { Background, BackgroundBase } from "../types/dmToolTypes";

export const backgroundBaseToInstance = (base: BackgroundBase): Background => {
    return {
        name: base.name,
        description: base.description,
        abilityScores: ["", ""],
        features: [],
        skillProficiencies: [],
        baseId: base.id,
    };
}