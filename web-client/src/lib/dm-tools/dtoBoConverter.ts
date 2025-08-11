import type { AbilityScoreDto, BackgroundBaseDto, BackgroundDto, CharacterClassBaseDto, CharacterClassDto, CharacterDto, FeatEffectDto, FeatureBaseDto, FeatureDto, LineageBaseDto, LineageDto, SpeciesBaseDto, SpeciesDto, SubclassBaseDto, SubclassDto } from "../types/apiResponses";
import type { AbilityScores, Background, BackgroundBase, Character, CharacterClass, CharacterClassBase, FeatEffect, Feature, FeatureBase, Lineage, LineageBase, Species, SpeciesBase, Subclass, SubclassBase } from "../types/dmToolTypes";

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
        defaultScoreArray: classDto.defaultScoreArray
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

export const characterToBo = (characterDto: CharacterDto, classBases: CharacterClassBase[], backgroundBases: BackgroundBase[], subclasses: SubclassBase[], speciesBases: SpeciesBase[], lineageBases: LineageBase[], effects: FeatEffect[], featureBases: FeatureBase[]): Character => {
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
        proficiencyBonus: characterDto.proficiencyBonus
    }
}
