import type { BackgroundBaseDto, CharacterClassBaseDto, CharacterClassDto, CharacterDto, FeatEffectDto, FeatureBaseDto, LineageBaseDto, SpeciesBaseDto, SubclassBaseDto, SubclassDto } from "../types/apiResponses";
import type { BackgroundBase, Character, CharacterClass, CharacterClassBase, FeatureBase, LineageBase, SpeciesBase, Subclass, SubclassBase } from "../types/dmToolTypes";

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

export const subclassBaseToBo = (subclassDto: SubclassBaseDto): SubclassBase => {
    return {
        id: subclassDto.id,
        name: subclassDto.name
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
export const subclassInstanceToBo = (subclassDto: SubclassDto, subclasses: SubclassBase[]): Subclass => {
    return {
        base: subclasses.find((subclass) => subclassDto.baseId == subclass.id)!
    }
}

export const classInstanceToBo = (classDto : CharacterClassDto, subclasses: SubclassBase[], featureBases: FeatureBase[]): CharacterClass => {
    return {
        level: classDto.level,
        subclass: subclassInstanceToBo(classDto.subclass, subclasses),
        features: featureBases.filter((featureBase) => classDto.featureIds.includes(featureBase.id)),
    }
}

export const characterToBo = (characterDto: CharacterDto): Character => {
    return {
        name: characterDto.name,
        alignment: characterDto.alignment,
        characterClass: characterDto.characterClass,
        background: characterDto.background,
        species: characterDto.species,
        scores: characterDto.scores,
        physicalDescription: characterDto.physicalDescription,
        personality: characterDto.personality,
        ideals: characterDto.ideals,
        bonds: characterDto.bonds,
        flaws: characterDto.flaws,
        proficiencyBonus: characterDto.proficiencyBonus
    }
}
