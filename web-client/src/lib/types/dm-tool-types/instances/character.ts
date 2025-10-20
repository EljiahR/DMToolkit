import type { ItemInstanceBase, ItemInstanceBaseDto } from "../items/bases/itemInstanceBase";
import type { Worth, WorthDto } from "../items/bases/worth";
import type { AbilityScoreInstanceDto, AbilityScores } from "./abilityScoreInstance";
import type { BackgroundInstance, BackgroundInstanceDto } from "./backgroundInstance";
import type { CharacterClassInstance, CharacterClassInstanceDto } from "./characterClassInstance";
import type { SpeciesInstance, SpeciesInstanceDto } from "./speciesInstance";

export interface Character {
    id: string;
    name: string;
    alignment: string;
    hp: number;
    tempHp: number;
    characterClassInstances: CharacterClassInstance[];
    backgroundInstance: BackgroundInstance | null;
    speciesInstance: SpeciesInstance | null;
    scores: AbilityScores;
    physicalDescription: string;
    personality: string;
    ideals: string;
    bonds: string;
    flaws: string;
    coins: Worth;
    inventory: ItemInstanceBase[];
}

export interface CharacterDto {
    id: string;
    name: string;
    alignment: string;
    hp: number;
    tempHp: number;
    characterClassInstances: CharacterClassInstanceDto[];
    backgroundInstance: BackgroundInstanceDto | null;
    speciesInstance: SpeciesInstanceDto | null;
    scoreInstances: AbilityScoreInstanceDto[];
    physicalDescription: string;
    personality: string;
    ideals: string;
    bonds: string;
    flaws: string;
    coins: WorthDto;
    inventory: ItemInstanceBaseDto[];
}