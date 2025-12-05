import type { ItemInstanceBase, ItemInstanceBaseDto } from "../items/bases/itemInstanceBase";
import type { Worth, WorthDto } from "../items/bases/worth";
import type { CharacterSpell, CharacterSpellDto } from "../relationships/characterSpell";
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
    primaryCharacterClassInstance: CharacterClassInstance | null;
    secondaryCharacterClassInstance: CharacterClassInstance | null;
    tertiaryCharacterClassInstance: CharacterClassInstance | null;
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
    characterSpells: CharacterSpell[];
}

export interface CharacterDto {
    id: string;
    name: string;
    alignment: string;
    hp: number;
    tempHp: number;
    primaryCharacterClassInstanceDto: CharacterClassInstanceDto | null;
    secondaryCharacterClassInstanceDto: CharacterClassInstanceDto | null;
    tertiaryCharacterClassInstanceDto: CharacterClassInstanceDto | null;
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
    characterSpells: CharacterSpellDto[];
}