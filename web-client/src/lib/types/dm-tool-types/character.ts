import type { Background, BackgroundDto } from "./background";
import type { CharacterClass, CharacterClassDto } from "./characterClass";
import type { Spell } from "./entities/spell";
import type { AllItemTypes, Worth, WorthDto } from "./items";
import type { Species, SpeciesDto } from "./species";
import type { AbilityScoreInstanceDto, AbilityScores } from "./stats";

export interface Character {
    id: string;
    name: string;
    alignment: string;
    hp: number;
    hpRolls: number[];
    tempHp: number;
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
    coins: Worth;
    inventory: AllItemTypes[];
    equippedItems: AllItemTypes[];
    knownSpells: Spell[];
    readiedSpells: Spell[];
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
    scores: AbilityScoreInstanceDto[];
    scoreInstanceIds: string[];
    physicalDescription: string;
    personality: string;
    ideals: string;
    bonds: string;
    flaws: string;
    proficiencyBonus: number;
    coins: WorthDto,
    inventoryIds: string[];
    equippedItemIds: string[];
}


