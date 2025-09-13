import type { Feature, FeatureBase, FeatureDto } from "./feature";

export interface SubclassBase {
    id: string;
    name: string;
    description: string;
    features: FeatureBase[];
}

export interface SubclassBaseDto {
    id: string;
    name: string;
    description: string;
    featureIds: string[];
}

export interface Subclass {
    id: string;
    base: SubclassBase;
    features: Feature[];
}

export interface SubclassDto {
    id: string;
    baseId: string;
    featureInstanceIds: string[];
    features: FeatureDto[];
}

export interface CharacterClassBase {
    id: string;
    name: string;
    description: string;
    hitDie: number;
    fixedHp: number;
    subclasses: SubclassBase[];
    features: FeatureBase[];
    defaultScoreArray: number[];
};

export interface CharacterClassBaseDto {
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
    base: CharacterClassBase;
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
