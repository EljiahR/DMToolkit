import type { AbilityScoreDto, BackgroundBaseDto, BackgroundDto, CharacterClassBaseDto, CharacterClassDto, CharacterDto, CoinsDto, FeatEffectDto, FeatureBaseDto, FeatureDto, ItemDto, LineageBaseDto, LineageDto, SpeciesBaseDto, SpeciesDto, SubclassBaseDto, SubclassDto, WeaponDto } from "../types/apiResponses";
import type { Background, BackgroundBase } from "../types/dm-tool-types/background";
import type { Character } from "../types/dm-tool-types/character";
import type { CharacterClass, CharacterClassBase, Subclass, SubclassBase } from "../types/dm-tool-types/characterClass";
import type { FeatEffect, Feature, FeatureBase } from "../types/dm-tool-types/feature";
import type { AllItemTypes, Item, Weapon, Worth } from "../types/dm-tool-types/items";
import type { Lineage, LineageBase, Species, SpeciesBase } from "../types/dm-tool-types/species";
import type { AbilityScores } from "../types/dm-tool-types/stats";

// Bases

export const featureBaseToBo = (featureDto: FeatureBaseDto, effects: FeatEffectDto[]): FeatureBase => {
    return {
        id: featureDto.id,
        name: featureDto.name,
        description: featureDto.description,
        availableEffects: featureDto.availableEffectIds.map((idArr) => idArr.map(id => effects.find((effect) => effect.id == id)).filter(effect => effect != undefined))
    }
}

export const backgroundBaseToBo = (backgroundDto: BackgroundBaseDto, featuresBases: FeatureBase[]): BackgroundBase => {
    return {
        id: backgroundDto.id,
        name: backgroundDto.name,
        description: backgroundDto.description,
        abilityScores: backgroundDto.abilityScores,
        features: featuresBases.filter((featureBase) => backgroundDto.featureIds.includes(featureBase.id)),
        skillProficiencies: backgroundDto.skillProficiencies
    }
}

export const subclassBaseToBo = (subclassDto: SubclassBaseDto, featuresBases: FeatureBase[]): SubclassBase => {
    return {
        id: subclassDto.id,
        name: subclassDto.name,
        description: subclassDto.description,
        features: featuresBases.filter((featureBase) => subclassDto.featureIds.includes(featureBase.id)),
    }
}

export const characterClassBaseToBo = (classDto: CharacterClassBaseDto, subclassBases: SubclassBase[], featureBases: FeatureBase[]): CharacterClassBase => {
    return {
        id: classDto.id,
        name: classDto.name,
        description: classDto.description,
        subclasses: subclassBases.filter((subclassBase) => classDto.subclassIds.includes(subclassBase.id)),
        features: featureBases.filter((featureBase) => classDto.featureIds.includes(featureBase.id)),
        defaultScoreArray: classDto.defaultScoreArray,
        hitDie: classDto.hitDie,
        fixedHp: classDto.fixedHp
    }
}

export const lineageBaseToBo = (lineageDto: LineageBaseDto, featureBases: FeatureBase[]): LineageBase => {
    return {
        id: lineageDto.id,
        name: lineageDto.name,
        description: lineageDto.description,
        features: featureBases.filter((featureBase) => lineageDto.featureIds.includes(featureBase.id)),
        speciesId: lineageDto.speciesId
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

export const weaponToBo = (weaponDto: WeaponDto): Weapon => {
    return {
        ...weaponDto
    }
}

export const inventoryToBo = (ids: string[], allItems: AllItemTypes[]): AllItemTypes[] => {
    return allItems.filter((item) => ids.includes(item.id)); // Can be optimised for sure
}

export const characterToBo = (characterDto: CharacterDto, classBases: CharacterClassBase[], backgroundBases: BackgroundBase[], subclasses: SubclassBase[], speciesBases: SpeciesBase[], lineageBases: LineageBase[], effects: FeatEffect[], featureBases: FeatureBase[], allItems: AllItemTypes[]): Character => {
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
        inventory: inventoryToBo(characterDto.inventoryIds, allItems)
    }
}
