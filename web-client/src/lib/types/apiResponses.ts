// Auth
export type Token = {
    tokenType: string;
    accessToken: string;
    expiresIn: number;
    refreshToken: string;
}

export type RegisterErrors = {
    type: string;
    title: string;
    status: number;
    detail: string;
    instance: string;
    errors: {
        additionalProp1: [
        string
        ],
        additionalProp2: [
        string
        ],
        additionalProp3: [
        string
        ]
    };
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
}

// api/dmTools
export interface CharacterClassBaseDto {
    id: string;
    name: string;
    description: string;
    subclassIds: string[];
    featureIds: string[];
    defaultScoreArray: number[];
};

export interface CharacterClassDto {
    name: string;
    description: string;
    level: number;
    subclass: SubclassDto;
    featureIds: string[];
    baseId: string;
}

export interface SubclassBaseDto {
    id: string;
    name: string;
}

export interface SubclassDto {
    baseId: string;
}

export interface FeatEffectDto {
    id: string;
    type: string;
    data: Record<string, any>;
}

export interface FeatureBaseDto {
    id: string;
    name: string;
    description: string;
    availableEffectIds: string[][];
}

export interface FeatureDto {
    effectIds: string[];
    baseId: string;
}

export interface LineageBaseDto {
    id: string;
    name: string;
    description: string;
    featureIds: string[];
    speciesId: string;
}

export interface LineageDto {
    name: string;
    description: string;
    featureIds: string[];
    baseId: string;
}

export interface SpeciesBaseDto {
    id: string;
    name: string;
    description: string;
    type: string;
    speed: number;
    size: string;
    featureIds: string[];
    lineageIds: string[];
}

export interface SpeciesDto {
    name: string;
    description: string;
    type: string;
    speed: number;
    size: string;
    feature: string[];
    lineageId: string;
    baseId: string;
}

export interface BackgroundBaseDto {
    id: string;
    name: string;
    description: string;
    abilityScores: string[];
    featureIds: string[];
    skillProficiencies: string[];
}

export interface BackgroundDto {
    name: string;
    description: string;
    abilityScores: string[];
    featureIds: string[];
    skillProficiencies: string[];
    baseId: string;
}

export interface SkillDto {
    name: string;
    scoreId: string;
    proficient: boolean;
}

export interface AbilityScoreDto {
    id: string;
    name: string;
    amount: number;
    proficient: boolean;
    skills: SkillDto[];
}

export interface AbilityScoresDto {
    [key: string]: AbilityScoreDto;
    "str": AbilityScoreDto;
    "dex": AbilityScoreDto;
    "con": AbilityScoreDto;
    "int": AbilityScoreDto;
    "wis": AbilityScoreDto;
    "cha": AbilityScoreDto;
}

export interface CharacterDto {
    name: string;
    alignment: string;
    characterClass: CharacterClassDto;
    background: BackgroundDto;
    species: SpeciesDto;
    lineage: LineageDto;
    scores: AbilityScoresDto;
    physicalDescription: string;
    personality: string;
    ideals: string;
    bonds: string;
    flaws: string;
    proficiencyBonus: number
}

export interface allBasesDto {
    features: FeatureBaseDto[];
    classes: CharacterClassBaseDto[];
    backgrounds: BackgroundBaseDto[];
    species: SpeciesBaseDto[];
    lineages: LineageBaseDto[];
}
