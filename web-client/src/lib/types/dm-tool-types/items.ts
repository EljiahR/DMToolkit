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

export type ItemCategories = "Weapon" | "Armor";

export interface Item {
    id: string;
    name: string;
    weight: number;
    worth: Worth;
    category: ItemCategories;
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

export type ArmorCategories = "Light" | "Medium" | "Heavy" | "Shield";

export interface Armor extends Item {
    armorCategory: ArmorCategories;
    acBase: number;
    dexterityCap: number;
    hasDexterityCap: number;
    strengthRequirement: number;
    hasStealthDisadvantage: boolean;
    don: string;
    doff: string;
};

export type AllItemTypes = Item | Weapon | Armor