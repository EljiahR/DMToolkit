import type { FeatureDefinition } from "../feature";

export interface FeatGroupLevel {
    level: number;
    group: number;
    feats: FeatureDefinition[];
}

export interface FeatGroupLevelDto {
    level: number;
    group: number;
    featIds: string[];
}