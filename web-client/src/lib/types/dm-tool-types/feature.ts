import type { FeatDefinition } from "./definitions/featDefinition";
import type { FeatEffect } from "./entities/featEffect";

export interface Feature {
    id: string;
    effects: FeatEffect[];
    base: FeatDefinition;
}

export interface FeatureDto {
    id: string;
    effectIds: string[];
    baseId: string;
}


