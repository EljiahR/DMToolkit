export interface FeatEffect {
    id: string;
    type: string;
    data: Record<string, any>;
}

export interface FeatureBase {
    id: string;
    name: string;
    description: string;
    availableEffects: FeatEffect[][];
}

export interface FeatureBaseDto {
    id: string;
    name: string;
    description: string;
    availableEffectIds: string[][];
}

export interface Feature {
    id: string;
    effects: FeatEffect[];
    base: FeatureBase;
}

export interface FeatureDto {
    id: string;
    effectIds: string[];
    baseId: string;
}


