export interface CharacterClassBase {
    id: string;
    name: string;
    description: string;
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

export interface FeatEffect {
    id: string;
    type: string;
    data: Record<string, any>;
}

export interface FeatureBase {
    id: string;
    name: string;
    description: string;
    availableEffects: FeatEffect[][];
}

export interface Feature {
    id: string;
    effects: FeatEffect[];
    base: FeatureBase;
}

export interface LineageBase {
    id: string;
    name: string;
    description: string;
    features: FeatureBase[];
    speciesId: string;
}

export interface Lineage {
    id: string;
    features: Feature[];
    base: LineageBase;
}

export interface SpeciesBase {
    id: string;
    name: string;
    description: string;
    type: string;
    speed: number;
    size: string;
    features: FeatureBase[];
    lineages: LineageBase[];
}

export interface Species {
    id: string;
    features: Feature[];
    lineage: Lineage;
    base: SpeciesBase;
}

export interface BackgroundBase {
    id: string;
    name: string;
    description: string;
    abilityScores: string[];
    features: FeatureBase[];
    skillProficiencies: string[];
}

export interface Background {
    id: string;
    abilityScores: string[];
    features: Feature[];
    skillProficiencies: string[];
    base: BackgroundBase;
}

export interface Skill {
    id: string;
    name: string;
    proficient: boolean;
}

export interface AbilityScore {
    id: string;
    name: string;
    amount: number;
    proficient: boolean;
    skills: Skill[];
}

export interface AbilityScores {
    [key: string]: AbilityScore;
    "str": AbilityScore;
    "dex": AbilityScore;
    "con": AbilityScore;
    "int": AbilityScore;
    "wis": AbilityScore;
    "cha": AbilityScore;
}

export interface Character {
    id: string;
    name: string;
    alignment: string;
    characterClass: CharacterClass;
    background: Background;
    species: Species;
    scores: AbilityScores;
    physicalDescription: string;
    personality: string;
    ideals: string;
    bonds: string;
    flaws: string;
    proficiencyBonus: number;
}

export interface allBases {
    features: FeatureBase[];
    classes: CharacterClassBase[];
    backgrounds: BackgroundBase[];
    species: SpeciesBase[];
    lineages: LineageBase[];
}