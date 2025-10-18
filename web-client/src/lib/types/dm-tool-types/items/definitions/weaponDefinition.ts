import type { Effect } from "../../entities/effect";
import type { ItemDefinitionBase } from "../bases/itemDefinitionBase";

export interface WeaponDefinition extends ItemDefinitionBase {
    numberOfDice: number;
    numberOfSides: number;
    damageType: string;
    weaponProperties: Effect[];
    weaponMastery: Effect | null;
}