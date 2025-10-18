import type { AbilityScoreDefinition, AbilityScoreDefinitionDto } from "../definitions/abilityScoreDefinition";
import type { BackgroundDefinition, BackgroundDefinitionDto } from "../definitions/backgroundDefinition";
import type { CharacterClassDefinition, CharacterClassDefinitionDto } from "../definitions/characterClassDefinition";
import type { FeatDefinition, FeatDefinitionDto } from "../definitions/featDefinition";
import type { SpeciesDefinition, SpeciesDefinitionDto } from "../definitions/speciesDefinition";
import type { FeatEffect, FeatEffectDto } from "../entities/effect";
import type { School, SchoolDto } from "../entities/school";
import type { Spell, SpellDto } from "../entities/spell";
import type { SpellEffect, SpellEffectDto } from "../entities/spellEffect";

export interface StartupData {
    abilityScoreDefinitions: AbilityScoreDefinition[];
    backgroundDefinitions: BackgroundDefinition[];
    characterClassDefinitions: CharacterClassDefinition[];
    featDefinitions: FeatDefinition[];
    speciesDefinitions: SpeciesDefinition[];
    featEffects: FeatEffect[];
    schools: School[];
    spells: Spell[];
    spellEffects: SpellEffect[];
}

export interface StartupDataDto {
    abilityScoreDefinitions: AbilityScoreDefinitionDto[];
    backgroundDefinitions: BackgroundDefinitionDto[];
    characterClassDefinitions: CharacterClassDefinitionDto[];
    featDefinitions: FeatDefinitionDto[];
    speciesDefinitions: SpeciesDefinitionDto[];
    featEffects: FeatEffectDto[];
    schools: SchoolDto[];
    spells: SpellDto[];
    spellEffects: SpellEffectDto[];
}