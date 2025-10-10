import type { BackgroundDefinition } from "../background";
import type { CharacterClassDefinition } from "../characterClass";
import type { FeatureDefinition } from "../feature";
import type { LineageDefinition, SpeciesDefinition } from "../species";

export interface StartupData {
    features: FeatureDefinition[];
    classes: CharacterClassDefinition[];
    backgrounds: BackgroundDefinition[];
    species: SpeciesDefinition[];
    lineages: LineageDefinition[];
}