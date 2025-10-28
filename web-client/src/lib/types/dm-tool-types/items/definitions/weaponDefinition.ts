import type { Effect } from "../../entities/effect";
import type { ItemDefinitionBase, ItemDefinitionBaseDto } from "../bases/itemDefinitionBase";

export interface WeaponDefinition extends ItemDefinitionBase {
    numberOfDice: number;
    numberOfSides: number;
    damageType: string;
    weaponProperties: Effect[];
    weaponMastery: Effect | null;
}

export interface WeaponDefinitionDto extends ItemDefinitionBaseDto {
    numberOfDice: number;
    numberOfSides: number;
    damageType: string;
    weaponPropertyIds: string[];
    weaponMasteryId: string;
}