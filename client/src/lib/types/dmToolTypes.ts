export type CharacterClassBase = {
    id: string;
    name: string;
    description: string;
    subclasses: SubclassBase[];
    features: FeatureBase[];
    defaultScoreArray: number[];
};

export type CharacterClass = {
    name: string;
    description: string;
    level: number;
    subclass: Subclass;
    features: Feature[];
    baseId: string;
}

export type SubclassBase = {
    id: string;
    name: string;
}

export type Subclass = {
    name: string;
    baseId: string;
}

export type FeatureBase = {
    id: string;
    name: string;
    description: string;
    category: string;
    prerequisiteType: string;
    prerequisiteAmount: number;
}

export type Feature = {
    name: string;
    description: string;
    category: string;
    prerequisiteType: string;
    prerequisiteAmount: number;
    baseId: string;
}

export type LineageBase = {
    id: string;
    name: string;
    description: string;
    features: FeatureBase[];
    speciesId: string;
}

export type Lineage = {
    name: string;
    description: string;
    features: Feature[];
    baseId: string;
}

export type SpeciesBase = {
    id: string;
    name: string;
    description: string;
    type: string;
    speed: number;
    size: string;
    features: FeatureBase[];
    lineages: LineageBase[]
}

export type Species = {
    name: string;
    description: string;
    type: string;
    speed: number;
    size: string;
    features: Feature[];
    lineage: Lineage;
    baseId: string;
}

export type BackgroundBase = {
    id: string;
    name: string;
    description: string;
    abilityScores: string[];
    features: FeatureBase[];
    skillProficiencies: string[];
}

export type Background = {
    name: string;
    description: string;
    abilityScores: string[];
    features: Feature[];
    skillProficiencies: string[];
    baseId: string;
}

export type Skill = {
    name: string;
    scoreId: string;
    proficient: boolean;
}

export type AbilityScore = {
    id: string;
    name: string;
    amount: number;
    bonus: number;
    proficient: boolean;
    skills: Skill[];
}

export type AbilityScores = {
    [key: string]: AbilityScore;
    "str": AbilityScore;
    "dex": AbilityScore;
    "con": AbilityScore;
    "int": AbilityScore;
    "wis": AbilityScore;
    "cha": AbilityScore;
}

export type Character = {
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