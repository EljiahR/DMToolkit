import type { BackgroundBaseDto } from "./dm-tool-types/background";
import type { CharacterClassBaseDto } from "./dm-tool-types/characterClass";
import type { FeatureBaseDto } from "./dm-tool-types/feature";
import type { LineageBaseDto, SpeciesBaseDto } from "./dm-tool-types/species";

// Auth
export type Token = {
    tokenType: string;
    accessToken: string;
    expiresIn: number;
    refreshToken: string;
}

export type RegisterErrors = {
    type: string;
    title: string;
    status: number;
    detail: string;
    instance: string;
    errors: {
        additionalProp1: [
        string
        ],
        additionalProp2: [
        string
        ],
        additionalProp3: [
        string
        ]
    };
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
}

// api/dmTools

export interface allBasesDto {
    features: FeatureBaseDto[];
    classes: CharacterClassBaseDto[];
    backgrounds: BackgroundBaseDto[];
    species: SpeciesBaseDto[];
    lineages: LineageBaseDto[];
}
