import type { BackgroundBase } from "./background";
import type { CharacterClassBase } from "./characterClass";
import type { FeatureBase } from "./feature";
import type { LineageBase, SpeciesBase } from "./species";

export interface allBases {
    features: FeatureBase[];
    classes: CharacterClassBase[];
    backgrounds: BackgroundBase[];
    species: SpeciesBase[];
    lineages: LineageBase[];
}