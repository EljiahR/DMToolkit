import type { FeatEffectDto, FeatureBaseDto } from "../types/apiResponses";
import type { FeatureBase } from "../types/dmToolTypes";

const featureBaseToBo = (featureDto: FeatureBaseDto, effects: FeatEffectDto[]): FeatureBase => {
    return {
        id: featureDto.id,
        name: featureDto.name,
        description: featureDto.description,
        availableEffects: 
    }
}