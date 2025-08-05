import type { Background, BackgroundBase, Feature } from "../types/dmToolTypes";

export const backgroundBaseToInstance = (base: BackgroundBase, abilityScores: [string, string], features: Feature[], skillProficiencies: string[]): Background => {
    return {
        name: base.name,
        abilityScores,
        features,
        skillProficiencies,
        base
    };
}