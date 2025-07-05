export type CharacterClass = {
    name: string;
    description: string;
    subclass?: Subclass;
    level: number;
    features: Feature[];

};

export type Subclass = {
    name: string;
}

export type Feature = {
    name: string;
    description: string;
    category: string;
    prerequisiteType: string;
    PrerequisiteAmount: number;
}

export type Lineage = {
    name: string;
    description: string;
    feature: Feature;
}

export type Species = {
    name: string;
    description: string;
    type: string;
    speed: number;
    size: string;
    features: Feature[];
    lineage: Lineage
}

export type Background = {
    name: string;
    description: string;
    abilityScores: string[];
    feature: Feature;
    skillProficiencies: string[];
}