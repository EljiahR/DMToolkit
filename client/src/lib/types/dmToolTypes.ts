export interface CharacterClassBase {
    id: string;
    name: string;
    description: string;
    subclasses: SubclassBase[];
    features: FeatureBase[];
    defaultScoreArray: number[];
};

export interface CharacterClass {
    name: string;
    description: string;
    level: number;
    subclass: Subclass;
    features: Feature[];
    baseId: string;
}

export interface SubclassBase {
    id: string;
    name: string;
}

export interface Subclass {
    name: string;
    baseId: string;
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
    baseId: string;
    effects: FeatEffect[];
}

export interface LineageBase {
    id: string;
    name: string;
    description: string;
    features: FeatureBase[];
    speciesId: string;
}

export interface Lineage {
    name: string;
    description: string;
    features: Feature[];
    baseId: string;
}

export interface SpeciesBase {
    id: string;
    name: string;
    description: string;
    type: string;
    speed: number;
    size: string;
    features: FeatureBase[];
    lineages: LineageBase[]
}

export interface Species {
    name: string;
    description: string;
    type: string;
    speed: number;
    size: string;
    features: Feature[];
    lineage: Lineage;
    baseId: string;
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
    name: string;
    description: string;
    abilityScores: string[];
    features: Feature[];
    skillProficiencies: string[];
    baseId: string;
}

export interface Skill {
    name: string;
    scoreId: string;
    proficient: boolean;
}

export interface AbilityScore {
    id: string;
    name: string;
    amount: number;
    bonus: number;
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
    name: string;
    alignment: string;
    characterClassBase: CharacterClassBase |  null;
    backgroundBase: BackgroundBase | null;
    backgroundInstance: Background;
    speciesBase: SpeciesBase | null;
    lineageBase: LineageBase | null;
    scores: AbilityScores;
    physicalDescription: string;
    personality: string;
    ideals: string;
    bonds: string;
    flaws: string;
    proficiencyBonus: number
}