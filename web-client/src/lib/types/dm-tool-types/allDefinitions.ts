import type { BackgroundDefinition } from "./background";
import type { CharacterClassDefinition } from "./characterClass";
import type { FeatureDefinition } from "./feature";
import type { LineageDefinition, SpeciesDefinition } from "./species";
import type { AbilityScoreDto } from "./stats";

export interface allDefinitions {
    features: FeatureDefinition[];
    classes: CharacterClassDefinition[];
    backgrounds: BackgroundDefinition[];
    species: SpeciesDefinition[];
    lineages: LineageDefinition[];
}

export interface startDataDto {
    abililityScore: AbilityScoreDto
}