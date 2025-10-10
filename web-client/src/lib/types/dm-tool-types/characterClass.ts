import type { Feature, FeatureDefinition, FeatureDto } from "./feature";

export interface SubclassDefinition {
    id: string;
    name: string;
    description: string;
    features: FeatureDefinition[];
}

export interface SubclassDefinitionDto {
    id: string;
    name: string;
    description: string;
    featureIds: string[];
}

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

export interface CharacterClassDefinition {
    id: string;
    name: string;
    description: string;
    hitDie: number;
    fixedHp: number;
    subclasses: SubclassDefinition[];
    features: FeatureDefinition[];
    defaultScoreArray: number[];
};

export interface CharacterClassDefinitionDto {
    id: string;
    name: string;
    description: string;
    hitDie: number;
    fixedHp: number;
    subclassIds: string[];
    featureIds: string[];
    defaultScoreArray: number[];
};

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
