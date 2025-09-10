type StringArraySizeOneToThree = [string] | [string, string] | [string, string, string];

export interface SpellEffect {
    id: string;
    subtitle: string | null;
    data: Record<string, any>;
}

export interface Spell {
    id: string;
    name: string;
    level: number;
    school: string;
    classes: string[];
    castingTime: string;
    range: string;
    components: StringArraySizeOneToThree;
    materialComponents: string[];
    duration: string;
    description: string;
    effects: SpellEffect[];
};