import type { Spell } from "../entities/spell";

export interface CharacterSpell {
    spell: Spell;
    isPrepared: boolean;
}

export interface CharacterSpellDto {
    spellId: string;
    isPrepared: boolean; 
}