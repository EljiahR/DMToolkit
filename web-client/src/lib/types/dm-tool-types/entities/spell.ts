import type { CharacterClassDefinition } from "../definitions/characterClassDefinition";
import type { SpellItem, SpellItemDto } from "../relationships/spellItem";
import type { School } from "./school";
import type { SpellEffect } from "./spellEffect";

export interface Spell {
    id: string;
    name: string;
    level: number;
    school: School | null;
    characterClasses: CharacterClassDefinition[];
    castingTime: string;
    range: string;
    verbalRequired: boolean;
    somaticRequired: boolean;
    materialsRequired: boolean;
    materialRequirements: SpellItem[];
    duration: string;
    description: string;
    spellEffects: SpellEffect[];
}

export interface SpellDto {
    id: string;
    name: string;
    level: number;
    schoolId: string;
    characterClassIds: string[];
    castingTime: string;
    range: string;
    verbalRequired: boolean;
    somaticRequired: boolean;
    materialsRequired: boolean;
    materialRequirements: SpellItemDto[];
    duration: string;
    description: string;
    spellEffectIds: string[];
}