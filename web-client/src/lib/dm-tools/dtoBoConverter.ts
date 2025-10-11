import type { Background, BackgroundDto } from "../types/dm-tool-types/background";
import type { Character, CharacterDto } from "../types/dm-tool-types/character";
import type { CharacterClass, CharacterClassDto, Subclass, SubclassDto } from "../types/dm-tool-types/characterClass";
import type { AbilityScoreDefinition, AbilityScoreDefinitionDto } from "../types/dm-tool-types/definitions/abilityScoreDefinition";
import type { BackgroundDefinition, BackgroundDefinitionDto } from "../types/dm-tool-types/definitions/backgroundDefinition";
import type { CharacterClassDefinition, CharacterClassDefinitionDto } from "../types/dm-tool-types/definitions/characterClassDefinition";
import type { FeatDefinition, FeatDefinitionDto } from "../types/dm-tool-types/definitions/featDefinition";
import type { LineageDefinition, LineageDefinitionDto } from "../types/dm-tool-types/definitions/lineageDefinition";
import type { SkillDefinition, SkillDefinitionDto } from "../types/dm-tool-types/definitions/skillDefinition";
import type { SubclassDefinition, SubclassDefinitionDto } from "../types/dm-tool-types/definitions/subclassDefinition";
import type { FeatEffect, FeatEffectDto } from "../types/dm-tool-types/entities/featEffect";
import type { Feature, FeatureDto } from "../types/dm-tool-types/feature";
import type { AllItemTypes, Armor, ArmorDto, Item, ItemDto, Weapon, WeaponDto, WeaponMastery, WeaponMasteryDto, WeaponProperty, WeaponPropertyDto, Worth } from "../types/dm-tool-types/items";
import type { FeatDefinitionEffectGrouping, FeatDefinitionEffectGroupingDto } from "../types/dm-tool-types/relationships/featDefinitionEffectGroupingDto";
import type { FeatGroupLevel, FeatGroupLevelDto } from "../types/dm-tool-types/relationships/featGroupLevel";
import type { Lineage, LineageDto, Species, SpeciesDto } from "../types/dm-tool-types/species";
import type { AbilityScoreDto, AbilityScores } from "../types/dm-tool-types/stats";

// Definitions

const skillDefinitionToBo = (skill: SkillDefinitionDto): SkillDefinition => {
    return {
        id: skill.id,
        name: skill.name,
        description: skill.description
    }
}

const abilityScoreDefinitionToBo = (score: AbilityScoreDefinitionDto): AbilityScoreDefinition => {
    return {
        id: score.id,
        name: score.name,
        abbreviation: score.abbreviation,
        description: score.description,
        skillDefinitions: score.skillDefinitions.map(s => skillDefinitionToBo(s))
    }
}

const featDefinitionEffectGroupingToBo = (tables: FeatDefinitionEffectGroupingDto[], effects: FeatEffect[]): FeatDefinitionEffectGrouping[] => {
    return tables.map(t => {
        return {
            group: t.group,
            featEffects: effects.filter(e => t.featEffectIds.includes(e.id))
        }
    })
}

export const featDefinitionToBo = (featDto: FeatDefinitionDto, effects: FeatEffectDto[]): FeatDefinition => {
    return {
        id: featDto.id,
        name: featDto.name,
        description: featDto.description,
        availableEffectTables: featDefinitionEffectGroupingToBo(featDto.availableEffectTables, effects)
    }
}

export const backgroundDefinitionToBo = (backgroundDto: BackgroundDefinitionDto, featDefinitions: FeatDefinition[], abilityScoreDefinitions: AbilityScoreDefinition[], skillDefinitions: SkillDefinition[]): BackgroundDefinition => {
    return {
        id: backgroundDto.id,
        name: backgroundDto.name,
        description: backgroundDto.description,
        abilityScoreDefinitions: abilityScoreDefinitions.filter(s => backgroundDto.abilityScoreIds.includes(s.id)),
        featDefinition: featDefinitions.find((feat) => backgroundDto.featDefinitionId == feat.id)!,
        skillProficiencies: skillDefinitions.filter(s => backgroundDto.skillDefinitionIds.includes(s.id))
    }
}

export const featGroupLevelToBo = (groups: FeatGroupLevelDto[], feats: FeatDefinition[]): FeatGroupLevel[] => {
    return groups.map(g => {
        return {
            level: g.level,
            group: g.group,
            feats: feats.filter(f => g.featIds.includes(f.id))
        }
    })
}

export const subclassDefinitionToBo = (subclassDto: SubclassDefinitionDto, featDefinitions: FeatDefinition[]): SubclassDefinition => {
    return {
        id: subclassDto.id,
        name: subclassDto.name,
        description: subclassDto.description,
        featTables: featGroupLevelToBo(subclassDto.featTables, featDefinitions)
    }
}

export const characterClassDefinitionToBo = (classDto: CharacterClassDefinitionDto, featDefinitions: FeatDefinition[]): CharacterClassDefinition => {
    return {
        id: classDto.id,
        name: classDto.name,
        description: classDto.description,
        subclassDefinitions: classDto.subclassDefinitions.map(s => subclassDefinitionToBo(s, featDefinitions)),
        featTables: featGroupLevelToBo(classDto.featTables, featDefinitions),
        hitDie: classDto.hitDie,
        fixedHp: classDto.fixedHp,
        defaultStr: classDto.defaultStr,
        defaultDex: classDto.defaultDex,
        defaultCon: classDto.defaultCon,
        defaultInt: classDto.defaultInt,
        defaultWis: classDto.defaultWis,
        defaultCha: classDto.defaultCha,
        itemSetA: null,
        itemSetB: null
    }
}

export const lineageDefinitionToBo = (lineageDto: LineageDefinitionDto, featDefinitions: FeatDefinition[]): LineageDefinition => {
    return {
        id: lineageDto.id,
        name: lineageDto.name,
        description: lineageDto.description,
        feats: featDefinitions.filter((feat) => lineageDto.featIds.includes(feat.id)),
    }
} 

export const speciesBaseToBo = (speciesDto: SpeciesBaseDto, featureBases: FeatureBase[], lineageBases: LineageBase[]): SpeciesBase => {
    return {
        id: speciesDto.id,
        name: speciesDto.name,
        description: speciesDto.description,
        type: speciesDto.type,
        speed: speciesDto.speed,
        size: speciesDto.size,
        features: featureBases.filter((featureBase) => speciesDto.featureIds.includes(featureBase.id)),
        lineages: lineageBases.filter((lineageBase) => speciesDto.lineageIds.includes(lineageBase.id))
    }
}

// Instances
export const featureInstancesToBo = (featureDtos: FeatureDto[], effects: FeatEffect[], featureBases: FeatureBase[]): Feature[] => {
    return featureDtos.map((featureDto) => {
        return {
            id: featureDto.id,
            effects: effects.filter((effect) => featureDto.effectIds.includes(effect.id)),
            base: featureBases.find((base) => base.id == featureDto.baseId)!
        }
    });
}

export const subclassInstanceToBo = (subclassDto: SubclassDto, subclasses: SubclassBase[], effects: FeatEffect[], featureBases: FeatureBase[]): Subclass => {
    return {
        id: subclassDto.id,
        base: subclasses.find((subclass) => subclassDto.baseId == subclass.id)!,
        features: featureInstancesToBo(subclassDto.features, effects, featureBases)
    }
}

export const classInstanceToBo = (classDto : CharacterClassDto, classBases: CharacterClassBase[], subclasses: SubclassBase[], effects: FeatEffect[], featureBases: FeatureBase[]): CharacterClass => {
    return {
        id: classDto.id,
        level: classDto.level,
        subclass: classDto.subclass == null ? null : subclassInstanceToBo(classDto.subclass, subclasses, effects, featureBases),
        features: featureInstancesToBo(classDto.features, effects, featureBases),
        base: classBases.find((classBase) => classBase.id == classDto.baseId)!
    }
}

export const backgroundInstanceToBo = (backgroundDto: BackgroundDto, backgroundBases: BackgroundBase[], effects: FeatEffect[], featureBases: FeatureBase[]): Background => {
    return {
        id: backgroundDto.id,
        abilityScores: backgroundDto.abilityScores,
        features: featureInstancesToBo(backgroundDto.features, effects, featureBases),
        skillProficiencies: backgroundDto.skillProficiencies,
        base: backgroundBases.find((backgroundBase) => backgroundBase.id == backgroundDto.baseId)!
    }
}

export const lineageInstanceToBo = (lineageDto: LineageDto, lineageBases: LineageBase[], effects: FeatEffect[], featureBases: FeatureBase[]): Lineage => {
    return {
        id: lineageDto.id,
        features: featureInstancesToBo(lineageDto.features, effects, featureBases),
        base: lineageBases.find((lineageBase) => lineageBase.id == lineageDto.baseId)!
    }
}

export const speciesInstanceToBo = (speciesDto: SpeciesDto, speciesBases: SpeciesBase[], lineageBases: LineageBase[], effects: FeatEffect[], featureBases: FeatureBase[]): Species => {
    return {
        id: speciesDto.id,
        features: featureInstancesToBo(speciesDto.features, effects, featureBases),
        lineage: lineageInstanceToBo(speciesDto.lineage, lineageBases, effects, featureBases),
        base: speciesBases.find((speciesBase) => speciesBase.id == speciesDto.baseId)!
    }
}

export const scoresToBo = (scoreDtos: AbilityScoreDto[]): AbilityScores => {
    return {
        "str": scoreDtos.find((score) => score.key == "str")!,
        "dex": scoreDtos.find((score) => score.key == "dex")!,
        "con": scoreDtos.find((score) => score.key == "con")!,
        "int": scoreDtos.find((score) => score.key == "int")!,
        "wis": scoreDtos.find((score) => score.key == "wis")!,
        "cha": scoreDtos.find((score) => score.key == "cha")!
    }
}

export const coinsToBo = (coinsDto: CoinsDto): Worth => {
    return {
        cp: coinsDto[0],
        sp: coinsDto[1],
        ep: coinsDto[2],
        gp: coinsDto[3],
        pp: coinsDto[4],
    }
};

export const itemToBo = (itemDto: ItemDto): Item => {
    return {
        ...itemDto,
        worth: coinsToBo(itemDto.worth)
    }
};

export const weaponPropertyToBo = (propertyDto: WeaponPropertyDto): WeaponProperty => {
    return {
        ...propertyDto
    }
}

export const WeaponMasteryToBo = (masteryDto: WeaponMasteryDto): WeaponMastery => {
    return {
        ...masteryDto
    }
}

export const weaponToBo = (weaponDto: WeaponDto, weaponProperties: WeaponProperty[], masteries: WeaponMastery[]): Weapon => {
    return {
        ...weaponDto,
        properties: weaponProperties.filter((property) => weaponDto.propertyIds.includes(property.id)),
        mastery: masteries.find((mastery) => mastery.id == weaponDto.masteryId)!,
        worth: coinsToBo(weaponDto.worth)
    }
}

export const armorToBo = (armorDto: ArmorDto): Armor => {
    return {
        ...armorDto,
        worth: coinsToBo(armorDto.worth)
    }
}

export const inventoryToBo = (ids: string[], allItems: AllItemTypes[]): AllItemTypes[] => {
    return allItems.filter((item) => ids.includes(item.id)); // Can be optimised for sure
}

export const characterToBo = (characterDto: CharacterDto, classBases: CharacterClassBase[], backgroundBases: BackgroundBase[], subclasses: SubclassBase[], speciesBases: SpeciesBase[], lineageBases: LineageBase[], effects: FeatEffect[], featureBases: FeatureBase[], allItems: AllItemTypes[]): Character => {
    const inventory = inventoryToBo(characterDto.inventoryIds, allItems);
    const knownSpells: Spell[] = [];

    return {
        id: characterDto.id,
        name: characterDto.name,
        alignment: characterDto.alignment,
        characterClass: classInstanceToBo(characterDto.characterClass, classBases, subclasses, effects, featureBases),
        background: backgroundInstanceToBo(characterDto.background, backgroundBases, effects, featureBases),
        species: speciesInstanceToBo(characterDto.species, speciesBases, lineageBases, effects, featureBases),
        scores: scoresToBo(characterDto.scores),
        physicalDescription: characterDto.physicalDescription,
        personality: characterDto.personality,
        ideals: characterDto.ideals,
        bonds: characterDto.bonds,
        flaws: characterDto.flaws,
        proficiencyBonus: characterDto.proficiencyBonus,
        hp: characterDto.hp,
        hpRolls: characterDto.hpRolls,
        tempHp: characterDto.tempHp,
        coins: coinsToBo(characterDto.coins),
        inventory,
        equippedItems: inventoryToBo(characterDto.equippedItemIds, inventory),
        knownSpells,
        readiedSpells: knownSpells
    }
}
