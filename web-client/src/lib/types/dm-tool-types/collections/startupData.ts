import type { AbilityScoreDefinition, AbilityScoreDefinitionDto } from "../definitions/abilityScoreDefinition";
import type { BackgroundDefinition, BackgroundDefinitionDto } from "../definitions/backgroundDefinition";
import type { CharacterClassDefinition, CharacterClassDefinitionDto } from "../definitions/characterClassDefinition";
import type { FeatDefinition, FeatDefinitionDto } from "../definitions/featDefinition";
import type { SpeciesDefinition, SpeciesDefinitionDto } from "../definitions/speciesDefinition";
import type { Effect, EffectDto } from "../entities/effect";
import type { School, SchoolDto } from "../entities/school";
import type { Spell, SpellDto } from "../entities/spell";
import type { ItemDefinitionBase, ItemDefinitionBaseDto } from "../items/bases/itemDefinitionBase";

export interface StartupData {
    abilityScoreDefinitions: AbilityScoreDefinition[];
    backgroundDefinitions: BackgroundDefinition[];
    characterClassDefinitions: CharacterClassDefinition[];
    featDefinitions: FeatDefinition[];
    speciesDefinitions: SpeciesDefinition[];
    effects: Effect[];
    itemDefinitionBases: ItemDefinitionBase[];
    schools: School[];
    spells: Spell[];
}

export interface StartupDataDto {
    abilityScoreDefinitions: AbilityScoreDefinitionDto[];
    backgroundDefinitions: BackgroundDefinitionDto[];
    characterClassDefinitions: CharacterClassDefinitionDto[];
    featDefinitions: FeatDefinitionDto[];
    speciesDefinitions: SpeciesDefinitionDto[];
    effects: EffectDto[];
    itemDefinitionBases: ItemDefinitionBaseDto[];
    schools: SchoolDto[];
    spells: SpellDto[];
}