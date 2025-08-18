export interface Piece {
    name: string;
    shortName: string;
    nextStep: number;
}

export interface Worth {
    cp: number;
    sp: number;
    ep: number;
    gp: number;
    pp: number;
}

export interface Item {
    id: string;
    name: string;
    weight: number;
    worth: Worth;
}

export interface WeaponProperty {
    id: string;
    name: string;
    description: string;
}

export interface WeaponMastery {
    id: string;
    name: string;
    description: string;
}

export interface Weapon extends Item {
    dice: [string, string];
    damageType: string;
    properties: WeaponProperty[];
    mastery: WeaponMastery;
    customName: string;
}

export interface Armor extends Item {
    category: "Light" | "Medium" | "Heavy" | "Shield";
    acBase: number;
    dexterityCap: number;
    hasDexterityCap: number;
    strengthRequirement: number;
    hasStealthDisadvantage: boolean;
    don: string;
    doff: string;
}