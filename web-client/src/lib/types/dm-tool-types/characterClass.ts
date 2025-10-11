import type { CharacterClassDefinition } from "./definitions/characterClassDefinition";
import type { SubclassDefinition } from "./definitions/subclassDefinition";
import type { Feature, FeatureDto } from "./feature";

export interface Subclass {
    id: string;
    base: SubclassDefinition;
    features: Feature[];
}

export interface SubclassDto {
    id: string;
    baseId: string;
    featureInstanceIds: string[];
    features: FeatureDto[];
}

export interface CharacterClass {
    id: string;
    level: number;
    subclass: Subclass | null;
    features: Feature[];
    base: CharacterClassDefinition;
}

export interface CharacterClassDto {
    id: string;
    level: number;
    subclass: SubclassDto | null;
    subclassInstanceId: string;
    features: FeatureDto[];
    featureInstanceIds: string[];
    baseId: string;
}
