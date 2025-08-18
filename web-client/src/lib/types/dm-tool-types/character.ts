import type { Background } from "./background";
import type { CharacterClass } from "./characterClass";
import type { AllItemTypes, Item, Worth } from "./items";
import type { Species } from "./species";
import type { AbilityScores } from "./stats";

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
}

