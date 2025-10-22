import type { ArmorCategory } from "../../enums/armorCategory";
import type { ItemDefinitionBase, ItemDefinitionBaseDto } from "../bases/itemDefinitionBase";

export interface ArmorDefinition extends ItemDefinitionBase {
    armorCategory: ArmorCategory;
    baseAC: number;
    dexterityCap: number;
    hasDexterityCap: boolean;
    strengthRequirement: number;
    hasStealthDisadvantage: boolean;
    don: string;
    doff: string;
}

export interface ArmorDefinitionDto extends ItemDefinitionBaseDto {
    armorCategory: ArmorCategory;
    baseAC: number;
    dexterityCap: number;
    hasDexterityCap: boolean;
    strengthRequirement: number;
    hasStealthDisadvantage: boolean;
    don: string;
    doff: string;
}