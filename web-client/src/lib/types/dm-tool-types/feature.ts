export interface FeatEffect {
    id: string;
    type: string;
    data: Record<string, any>;
}

export interface FeatureDefinition {
    id: string;
    name: string;
    description: string;
    availableEffects: FeatEffect[][];
}

export interface FeatureDefinitionDto {
    id: string;
    name: string;
    description: string;
    availableEffectIds: string[][];
}

export interface Feature {
    id: string;
    effects: FeatEffect[];
    base: FeatureDefinition;
}

export interface FeatureDto {
    id: string;
    effectIds: string[];
    baseId: string;
}


