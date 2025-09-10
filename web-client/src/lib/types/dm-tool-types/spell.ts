type StringArraySizeOneToThree = [string] | [string, string] | [string, string, string];

export interface Spell {
    id: string;
    name: string;
    description: string;
    level: number;
    school: string;
    castingTime: string;
    range: string;
    duration: string;
    components: StringArraySizeOneToThree;
    materialComponents: string[];
    target: string;
    hasSavingThrow: boolean;
    usesAttackRoll: boolean;
    shape: string;
    size: number;
    isAttack: boolean;
};