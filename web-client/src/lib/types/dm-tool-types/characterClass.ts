import type { Feature, FeatureBase } from "./feature";

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

export interface CharacterClass {
    id: string;
    level: number;
    subclass: Subclass | null;
    features: Feature[];
    base: CharacterClassBase;
}

export interface SubclassBase {
    id: string;
    name: string;
    description: string;
    features: FeatureBase[];
}

export interface Subclass {
    id: string;
    base: SubclassBase;
    features: Feature[];
}