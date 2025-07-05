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