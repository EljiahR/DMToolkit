import type { ItemInstanceBase, ItemInstanceBaseDto } from "../bases/itemInstanceBase";
import type { WeaponDefinition } from "../definitions/weaponDefinition";

export interface WeaponInstance extends ItemInstanceBase {
    definition: WeaponDefinition;
}

export interface WeaponInstanceDto extends ItemInstanceBaseDto {}