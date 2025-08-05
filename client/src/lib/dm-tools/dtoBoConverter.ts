import type { BackgroundBaseDto, FeatEffectDto, FeatureBaseDto, SubclassBaseDto } from "../types/apiResponses";
import type { BackgroundBase, FeatureBase, SubclassBase } from "../types/dmToolTypes";

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

