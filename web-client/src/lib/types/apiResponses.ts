import type { ArmorCategories, ItemCategories } from "./dm-tool-types/items";

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
// bases
export interface SubclassBaseDto {
    id: string;
    name: string;
    description: string;
    featureIds: string[];
}

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

export interface FeatureBaseDto {
    id: string;
    name: string;
    description: string;
    availableEffectIds: string[][];
}

export interface LineageBaseDto {
    id: string;
    name: string;
    description: string;
    featureIds: string[];
    speciesId: string;
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

export interface BackgroundBaseDto {
    id: string;
    name: string;
    description: string;
    abilityScores: string[];
    featureIds: string[];
    skillProficiencies: string[];
}

export interface allBasesDto {
    features: FeatureBaseDto[];
    classes: CharacterClassBaseDto[];
    backgrounds: BackgroundBaseDto[];
    species: SpeciesBaseDto[];
    lineages: LineageBaseDto[];
}

// Instances
export interface SubclassDto {
    id: string;
    baseId: string;
    features: FeatureDto[];
    featureInstanceIds: string[]
}

export interface CharacterClassDto {
    id: string;
    name: string;
    description: string;
    level: number;
    subclass: SubclassDto | null;
    subclassInstanceId: string;
    features: FeatureDto[];
    featureInstanceIds: string[];
    baseId: string;
}

export interface FeatEffectDto {
    id: string;
    type: string;
    data: Record<string, any>;
}

export interface FeatureDto {
    id: string;
    effectIds: string[];
    baseId: string;
}

export interface LineageDto {
    id: string;
    features: FeatureDto[];
    featureInstanceIds: string[];
    speciesInstanceId: string;
    baseId: string;
}

export interface SpeciesDto {
    id: string;
    features: FeatureDto[];
    featureInstanceIds: string[];
    lineage: LineageDto;
    lineageInstanceId: string;
    baseId: string;
}

export interface BackgroundDto {
    id: string;
    name: string;
    description: string;
    abilityScores: [string, string];
    features: FeatureDto[];
    featureInstanceIds: string[];
    skillProficiencies: string[];
    baseId: string;
}

export interface SkillDto {
    id: string;
    name: string;
    proficient: boolean;
    scoreId: string;
}

export interface AbilityScoreDto {
    id: string;
    key: string;
    name: string;
    amount: number;
    proficient: boolean;
    skills: SkillDto[];
    skillIds: string[];
}

export interface ItemDto {
    id: string;
    name: string;
    weight: number;
    worth: [number, number, number, number, number];
    category: ItemCategories;
}

export interface WeaponPropertyDto {
    id: string;
    name: string;
    description: string;
}

export interface WeaponMasteryDto {
    id: string;
    name: string;
    description: string;
}

export interface WeaponDto extends ItemDto {
    dice: [string, string];
    damageType: string;
    propertyIds: string[];
    masteryId: string;
    customName: string;
}

export interface ArmorDto extends ItemDto {
    armorCategory: ArmorCategories;
    acBase: number;
    dexterityCap: number;
    hasDexterityCap: number;
    strengthRequirement: number;
    hasStealthDisadvantage: boolean;
    don: string;
    doff: string;
}

export interface CharacterDto {
    id: string;
    name: string;
    alignment: string;
    hp: number;
    hpRolls: number[];
    tempHp: number;
    characterClass: CharacterClassDto;
    classInstanceId: string;
    background: BackgroundDto;
    backgroundInstanceId: string;
    species: SpeciesDto;
    speciesInstanceId: string;
    scores: AbilityScoreDto[];
    scoreInstanceIds: string[];
    physicalDescription: string;
    personality: string;
    ideals: string;
    bonds: string;
    flaws: string;
    proficiencyBonus: number;
    coins: [number, number, number, number, number];
    inventoryIds: string[];
    equippedItemIds: string[];
}
