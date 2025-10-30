import type { AbilityScoreAbbreviations } from "../redux/types";
import type { StartupData, StartupDataDto } from "../types/dm-tool-types/collections/startupData";
import type { AbilityScoreDefinition, AbilityScoreDefinitionDto } from "../types/dm-tool-types/definitions/abilityScoreDefinition";
import type { BackgroundDefinition, BackgroundDefinitionDto } from "../types/dm-tool-types/definitions/backgroundDefinition";
import type { CharacterClassDefinition, CharacterClassDefinitionDto } from "../types/dm-tool-types/definitions/characterClassDefinition";
import type { FeatDefinition, FeatDefinitionDto } from "../types/dm-tool-types/definitions/featDefinition";
import type { LineageDefinition, LineageDefinitionDto } from "../types/dm-tool-types/definitions/lineageDefinition";
import type { SkillDefinition, SkillDefinitionDto } from "../types/dm-tool-types/definitions/skillDefinition";
import type { SpeciesDefinition, SpeciesDefinitionDto } from "../types/dm-tool-types/definitions/speciesDefinition";
import type { SubclassDefinition, SubclassDefinitionDto } from "../types/dm-tool-types/definitions/subclassDefinition";
import type { Effect, EffectDto } from "../types/dm-tool-types/entities/effect";
import type { School } from "../types/dm-tool-types/entities/school";
import type { Spell, SpellDto } from "../types/dm-tool-types/entities/spell";
import type { AbilityScoreInstance, AbilityScoreInstanceDto, AbilityScores } from "../types/dm-tool-types/instances/abilityScoreInstance";
import type { BackgroundInstance, BackgroundInstanceDto } from "../types/dm-tool-types/instances/backgroundInstance";
import type { Character, CharacterDto } from "../types/dm-tool-types/instances/character";
import type { CharacterClassInstance, CharacterClassInstanceDto } from "../types/dm-tool-types/instances/characterClassInstance";
import type { FeatInstance, FeatInstanceDto } from "../types/dm-tool-types/instances/featInstance";
import type { LineageInstance, LineageInstanceDto } from "../types/dm-tool-types/instances/lineageInstance";
import type { SkillInstance, SkillInstanceDto } from "../types/dm-tool-types/instances/skillInstance";
import type { SpeciesInstance, SpeciesInstanceDto } from "../types/dm-tool-types/instances/speciesInstance";
import type { SubclassInstance, SubclassInstanceDto } from "../types/dm-tool-types/instances/subclassInstance";
import type { ItemDefinitionBase, ItemDefinitionBaseDto } from "../types/dm-tool-types/items/bases/itemDefinitionBase";
import type { ItemInstanceBase, ItemInstanceBaseDto } from "../types/dm-tool-types/items/bases/itemInstanceBase";
import type { Worth, WorthDto } from "../types/dm-tool-types/items/bases/worth";
import type { ArmorDefinition, ArmorDefinitionDto } from "../types/dm-tool-types/items/definitions/armorDefinition";
import type { ItemDefinition } from "../types/dm-tool-types/items/definitions/itemDefinition";
import type { WeaponDefinition, WeaponDefinitionDto } from "../types/dm-tool-types/items/definitions/weaponDefinition";
import type { ArmorInstance } from "../types/dm-tool-types/items/instances/armorInstance";
import type { ItemInstance } from "../types/dm-tool-types/items/instances/itemInstance";
import type { WeaponInstance } from "../types/dm-tool-types/items/instances/weaponInstance";
import type { CharacterSpell, CharacterSpellDto } from "../types/dm-tool-types/relationships/characterSpell";
import type { FeatDefinitionEffectGrouping, FeatDefinitionEffectGroupingDto } from "../types/dm-tool-types/relationships/featDefinitionEffectGroupingDto";
import type { FeatGroupLevel, FeatGroupLevelDto } from "../types/dm-tool-types/relationships/featGroupLevel";
import type { ItemDefinitionBaseQuantity, ItemDefinitionBaseQuantityDto } from "../types/dm-tool-types/relationships/itemDefinitionBaseQuantity";

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
        abbreviation: score.abbreviation as AbilityScoreAbbreviations,
        description: score.description,
        skillDefinitions: score.skillDefinitions.map(s => skillDefinitionToBo(s))
    }
}

const featDefinitionEffectGroupingToBo = (tables: FeatDefinitionEffectGroupingDto[], effects: Effect[]): FeatDefinitionEffectGrouping[] => {
    return tables.map(t => {
        return {
            group: t.group,
            effects: effects.filter(e => t.effectIds.includes(e.id))
        }
    })
}

export const featDefinitionToBo = (featDto: FeatDefinitionDto, effects: EffectDto[]): FeatDefinition => {
    return {
        id: featDto.id,
        name: featDto.name,
        description: featDto.description,
        availableEffectTables: featDefinitionEffectGroupingToBo(featDto.availableEffectTables, effects)
    }
}

export const backgroundDefinitionToBo = (backgroundDto: BackgroundDefinitionDto, featDefinitions: FeatDefinition[], abilityScoreDefinitions: AbilityScoreDefinition[], skillDefinitions: SkillDefinition[], itemDefinitionBases: ItemDefinitionBase[]): BackgroundDefinition => {
    return {
        id: backgroundDto.id,
        name: backgroundDto.name,
        description: backgroundDto.description,
        abilityScoreDefinitions: abilityScoreDefinitions.filter(s => backgroundDto.abilityScoreDefinitionIds.includes(s.id)),
        featDefinition: featDefinitions.find((feat) => backgroundDto.featDefinitionId == feat.id)!,
        skillProficiencies: skillDefinitions.filter(s => backgroundDto.skillDefinitionIds.includes(s.id)),
        startingGp: backgroundDto.startingGp,
        itemDefinitionBaseQuantities: itemDefinitionBaseQuantitiesToBo(backgroundDto.itemDefinitionBaseQuantities, itemDefinitionBases)
    }
}

export const featGroupLevelToBo = (groups: FeatGroupLevelDto[], feats: FeatDefinition[]): FeatGroupLevel[] => {
    return groups.map(g => {
        return {
            level: g.level,
            group: g.group,
            featDefinitions: feats.filter(f => g.featDefinitionIds.includes(f.id))
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

export const itemDefinitionBaseQuantitiesToBo = (itemDefinitionBaseQuantities: ItemDefinitionBaseQuantityDto[], itemDefinitionBases: ItemDefinitionBase[]): ItemDefinitionBaseQuantity[] => {
    return itemDefinitionBaseQuantities.reduce((currentList: ItemDefinitionBaseQuantity[], itemDefinitionBaseQuantity) => {
        const item = itemDefinitionBases.find(itemDefinitionBase => itemDefinitionBase.id == itemDefinitionBaseQuantity.itemDefinitionBaseId);
        if (item) {
            currentList.push({
                quantity: itemDefinitionBaseQuantity.quantity,
                itemDefinitionBase: item
            })
        }
        return currentList;
        
    }, [])
}

export const characterClassDefinitionToBo = (classDto: CharacterClassDefinitionDto, featDefinitions: FeatDefinition[], itemDefinitionBases: ItemDefinitionBase[]): CharacterClassDefinition => {
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
        itemDefinitionBaseQuantities: itemDefinitionBaseQuantitiesToBo(classDto.itemDefinitionBaseQuantities, itemDefinitionBases),
        startingGp: classDto.startingGp
    }
}

export const lineageDefinitionToBo = (lineageDto: LineageDefinitionDto, featDefinitions: FeatDefinition[]): LineageDefinition => {
    return {
        id: lineageDto.id,
        name: lineageDto.name,
        description: lineageDto.description,
        featDefinitions: featDefinitions.filter((feat) => lineageDto.featDefinitionIds.includes(feat.id)),
    }
} 

export const speciesDefinitionToBo = (speciesDto: SpeciesDefinitionDto, featDefinitions: FeatDefinition[]): SpeciesDefinition => {
    return {
        id: speciesDto.id,
        name: speciesDto.name,
        description: speciesDto.description,
        type: speciesDto.type,
        speed: speciesDto.speed,
        sizes: speciesDto.sizes,
        featDefinitions: featDefinitions.filter((feat) => speciesDto.featDefinitionIds.includes(feat.id)),
        lineageDefinitions: speciesDto.lineageDefinitions.map(l => lineageDefinitionToBo(l, featDefinitions))
    }
}

// Instances
export const featInstancesToBo = (featureDtos: FeatInstanceDto[], effects: Effect[], featDefinitions: FeatDefinition[]): FeatInstance[] => {
    return featureDtos.map((featureDto) => {
        return {
            id: featureDto.id,
            effects: effects.filter((effect) => featureDto.effectIds.includes(effect.id)),
            definition: featDefinitions.find((feat) => feat.id == featureDto.definitionId)!
        }
    });
}

export const subclassInstanceToBo = (subclassDto: SubclassInstanceDto, subclasses: SubclassDefinition[], effects: Effect[], featDefinitions: FeatDefinition[]): SubclassInstance => {
    return {
        id: subclassDto.id,
        definition: subclasses.find((subclass) => subclassDto.definitionId == subclass.id)!,
        featInstances: featInstancesToBo(subclassDto.featInstances, effects, featDefinitions)
    }
}

export const classInstancesToBo = (classDtos: CharacterClassInstanceDto[], characterClasses: CharacterClassDefinition[], subclasses: SubclassDefinition[], effects: Effect[], featDefinitions: FeatDefinition[]): CharacterClassInstance[] => {
    return classDtos.map((classDto) => {
        return {
            id: classDto.id,
            level: classDto.level,
            hpRolls: classDto.hpRolls,
            subclassInstance: classDto.subclassInstance == null ? null : subclassInstanceToBo(classDto.subclassInstance, subclasses, effects, featDefinitions),
            featInstances: featInstancesToBo(classDto.featInstances, effects, featDefinitions),
            selectedItemSet: classDto.selectedItemSet,
            definition: characterClasses.find((classDefinition) => classDefinition.id == classDto.definitionId)!
        }
    })
}

export const backgroundInstanceToBo = (backgroundDto: BackgroundInstanceDto, backgroundDefinitions: BackgroundDefinition[], effects: Effect[], featDefinitions: FeatDefinition[], abilityScoreDefinitions: AbilityScoreDefinition[]): BackgroundInstance => {
    return {
        id: backgroundDto.id,
        abilityScoreDefinitionPlusTwo: abilityScoreDefinitions.find(scoreDef => scoreDef.id == backgroundDto.abilityScoreDefinitionPlusTwoId) ?? null,
        abilityScoreDefinitionPlusOne: abilityScoreDefinitions.find(scoreDef => scoreDef.id == backgroundDto.abilityScoreDefinitionPlusOneId) ?? null,
        featInstance: featInstancesToBo([backgroundDto.featInstance], effects, featDefinitions)[0],
        selectedItemSet: backgroundDto.selectedItemSet,
        definition: backgroundDefinitions.find((background) => background.id == backgroundDto.definitionId)!
    }
}

export const lineageInstanceToBo = (lineageDto: LineageInstanceDto, lineageDefinitions: LineageDefinition[], effects: Effect[], featDefinitions: FeatDefinition[]): LineageInstance => {
    return {
        id: lineageDto.id,
        featInstances: featInstancesToBo(lineageDto.featInstances, effects, featDefinitions),
        definition: lineageDefinitions.find((lineage) => lineage.id == lineageDto.definitionId)!
    }
}

export const speciesInstanceToBo = (speciesDto: SpeciesInstanceDto, speciesDefinitions: SpeciesDefinition[], effects: Effect[], featDefinitions: FeatDefinition[]): SpeciesInstance => {
    const definition = speciesDefinitions.find(s => s.id == speciesDto.definitionId)!;

    return {
        id: speciesDto.id,
        featInstances: featInstancesToBo(speciesDto.featInstances, effects, featDefinitions),
        lineageInstance: speciesDto.lineageInstance != null ? lineageInstanceToBo(speciesDto.lineageInstance, definition.lineageDefinitions, effects, featDefinitions) : null,
        size: speciesDto.size,
        definition: definition
    }
}

export const skillInstancesToBo = (skillDtos: SkillInstanceDto[], skillDefinitions: SkillDefinition[]): SkillInstance[] => {
    return skillDtos.map(s => {
        return {
            id: s.id,
            isProficient: s.isProficient,
            definition: skillDefinitions.find(d => d.id == s.id)!
        }
    })
}

export const abilityScoreInstanceToBo = (score: AbilityScoreInstanceDto, scoreDefinitions: AbilityScoreDefinition[]): AbilityScoreInstance => {
    const definition = scoreDefinitions.find(s => s.id == score.id)!;
    return {
        id: score.id,
        score: score.score,
        isProficient: score.isProficient,
        skillInstances: skillInstancesToBo(score.skillInstances, definition.skillDefinitions),
        definition
    }
}

export const scoresToBo = (scoreDtos: AbilityScoreInstanceDto[], scoreDefinitions: AbilityScoreDefinition[]): AbilityScores => {
    const scores = scoreDtos.map(scoreDto => abilityScoreInstanceToBo(scoreDto, scoreDefinitions));
    
    return {
        "str": scores.find((score) => score.definition.abbreviation == "str")!,
        "dex": scores.find((score) => score.definition.abbreviation == "dex")!,
        "con": scores.find((score) => score.definition.abbreviation == "con")!,
        "int": scores.find((score) => score.definition.abbreviation == "int")!,
        "wis": scores.find((score) => score.definition.abbreviation == "wis")!,
        "cha": scores.find((score) => score.definition.abbreviation == "cha")!
    }
}

export const spellToBo = (spellDto: SpellDto, schools: School[], characterClassDefinitions: CharacterClassDefinition[], effect: Effect[]): Spell => {
    return {
        id: spellDto.id,
        name: spellDto.name,
        level: spellDto.level,
        school: schools.find(s => s.id == spellDto.id) ?? null,
        characterClasses: characterClassDefinitions.filter(c => spellDto.characterClassIds.includes(c.id)),
        castingTime: spellDto.castingTime,
        range: spellDto.range,
        verbalRequired: spellDto.verbalRequired,
        somaticRequired: spellDto.somaticRequired,
        materialsRequired: spellDto.materialsRequired,
        materialRequirements: [],
        duration: spellDto.duration,
        description: spellDto.description,
        effects: effect.filter(e => spellDto.effectIds.includes(e.id))
    }
}

export const coinsToBo = (coinsDto: WorthDto): Worth => {
    return {
        cp: {
            name: "Copper",
            abbreviation: "cp",
            nextStep: 10,
            amount: coinsDto.cp
        },
        sp: {
            name: "Silver",
            abbreviation: "sp",
            nextStep: 5,
            amount: coinsDto.sp
        },
        ep: {
            name: "Electum",
            abbreviation: "cp",
            nextStep: 2,
            amount: coinsDto.ep
        },
        gp: {
            name: "Gold",
            abbreviation: "cp",
            nextStep: 10,
            amount: coinsDto.gp
        },
        pp: {
            name: "Platinum",
            abbreviation: "cp",
            nextStep: 0,
            amount: coinsDto.pp
        },
    }
};

export const itemDefinitionBaseToBo = (itemDefinitionBaseDtos: ItemDefinitionBaseDto[], effects: Effect[]): ItemDefinitionBase[] => {
    return itemDefinitionBaseDtos.map((itemDefinitionBaseDto) => {
        const item: ItemDefinitionBase = {
            id: itemDefinitionBaseDto.id,
            name: itemDefinitionBaseDto.name,
            description: itemDefinitionBaseDto.description,
            itemType: itemDefinitionBaseDto.itemType,
            weight: itemDefinitionBaseDto.weight,
            worth: coinsToBo(itemDefinitionBaseDto.worth)
        }

        if (item.itemType == "Weapon") {
            const weapon = item as WeaponDefinition;
            weapon.numberOfDice = (itemDefinitionBaseDto as WeaponDefinitionDto).numberOfDice
            weapon.numberOfSides = (itemDefinitionBaseDto as WeaponDefinitionDto).numberOfSides
            weapon.damageType = (itemDefinitionBaseDto as WeaponDefinitionDto).damageType;
            weapon.weaponProperties = effects.filter((effect) => (itemDefinitionBaseDto as WeaponDefinitionDto).weaponPropertyIds.includes(effect.id));
            weapon.weaponMastery = effects.find((effect) => effect.id == (itemDefinitionBaseDto as WeaponDefinitionDto).weaponMasteryId) ?? null;

            return weapon;
        }

        if (item.itemType == "Armor") {
            const armor = item as ArmorDefinition;
            armor.armorCategory = (itemDefinitionBaseDto as ArmorDefinitionDto).armorCategory;
            armor.baseAC = (itemDefinitionBaseDto as ArmorDefinitionDto).baseAC;
            armor.dexterityCap = (itemDefinitionBaseDto as ArmorDefinitionDto).dexterityCap;
            armor.doff = (itemDefinitionBaseDto as ArmorDefinitionDto).doff;
            armor.don = (itemDefinitionBaseDto as ArmorDefinitionDto).don;
            armor.hasDexterityCap = (itemDefinitionBaseDto as ArmorDefinitionDto).hasDexterityCap;
            armor.hasStealthDisadvantage = (itemDefinitionBaseDto as ArmorDefinitionDto).hasStealthDisadvantage;
            armor.strengthRequirement = (itemDefinitionBaseDto as ArmorDefinitionDto).strengthRequirement;

            return armor;
        }

        return item as ItemDefinition;
    })
}

export const inventoryToBo = (inventoryDto: ItemInstanceBaseDto[], allItems: ItemDefinitionBase[]): ItemInstanceBase[] => {
    return inventoryDto.map((itemDto) => {
        
        const item: ItemInstanceBase = {
            id: itemDto.id,
            itemType: itemDto.itemType,
            quantity: itemDto.quantity,
            isEquipped: itemDto.isEquipped,
            definition: allItems.find((itemDefinition) => itemDefinition.id == itemDto.id)!
        }
        
        if (item.itemType == "Weapon") {
            const weapon = item as WeaponInstance;
            return weapon;
        }

        if (item.itemType == "Armor") {
            const armor = item as ArmorInstance;
            return armor;
        }

        return item as ItemInstance;
    })
}

export const characterSpellsToBo = (characterSpells: CharacterSpellDto[], allSpells: Spell[]): CharacterSpell[] => {
    return characterSpells.map(characterSpell => {
        return {
            isPrepared: characterSpell.isPrepared,
            spell: allSpells.find((spell) => spell.id == characterSpell.spellId)!
        }
    })
}

export const characterToBo = (abilityScoreDefinitions: AbilityScoreDefinition[], characterDto: CharacterDto, classDefinitions: CharacterClassDefinition[], backgroundDefinitions: BackgroundDefinition[], subclasses: SubclassDefinition[], speciesDefinitions: SpeciesDefinition[], effects: Effect[], featDefinitions: FeatDefinition[], allItems: ItemDefinitionBase[], allSpells: Spell[]): Character => {
    return {
        id: characterDto.id,
        name: characterDto.name,
        alignment: characterDto.alignment,
        characterClassInstances: classInstancesToBo(characterDto.characterClassInstances, classDefinitions, subclasses, effects, featDefinitions),
        backgroundInstance: characterDto.backgroundInstance != null ? backgroundInstanceToBo(characterDto.backgroundInstance, backgroundDefinitions, effects, featDefinitions, abilityScoreDefinitions) : null,
        speciesInstance: characterDto.speciesInstance != null ? speciesInstanceToBo(characterDto.speciesInstance, speciesDefinitions, effects, featDefinitions) : null,
        scores: scoresToBo(characterDto.scoreInstances, abilityScoreDefinitions),
        physicalDescription: characterDto.physicalDescription,
        personality: characterDto.personality,
        ideals: characterDto.ideals,
        bonds: characterDto.bonds,
        flaws: characterDto.flaws,
        hp: characterDto.hp,
        tempHp: characterDto.tempHp,
        coins: coinsToBo(characterDto.coins),
        inventory: inventoryToBo(characterDto.inventory, allItems),
        characterSpells: characterSpellsToBo(characterDto.characterSpells, allSpells)
    }
}

export const startupDataToBo = (data: StartupDataDto): StartupData => {
    const abilityScoreDefinitions = data.abilityScoreDefinitions.map(a => abilityScoreDefinitionToBo(a));
    const featDefinitions = data.featDefinitions.map(f => featDefinitionToBo(f, data.effects));
    const allSkillDefinitions = abilityScoreDefinitions.reduce((skillList, score) => {
        return [
            ...skillList,
            ...score.skillDefinitions
        ]
    }, [] as SkillDefinition[]);
    const itemDefinitionBases = itemDefinitionBaseToBo(data.itemDefinitionBases, data.effects);
    const characterClassDefinitions = data.characterClassDefinitions.map(c => characterClassDefinitionToBo(c, featDefinitions, itemDefinitionBases));


    return {
        abilityScoreDefinitions,
        backgroundDefinitions: data.backgroundDefinitions.map(b => backgroundDefinitionToBo(b, featDefinitions, abilityScoreDefinitions, allSkillDefinitions, itemDefinitionBases)),
        characterClassDefinitions,
        featDefinitions,
        speciesDefinitions: data.speciesDefinitions.map(s => speciesDefinitionToBo(s, featDefinitions)),
        effects: data.effects,
        itemDefinitionBases,
        schools: data.schools,
        spells: data.spells.map(s => spellToBo(s, data.schools, characterClassDefinitions, data.effects)),
    }
}
