import type { ItemInstanceBase, ItemInstanceBaseDto } from "../bases/itemInstanceBase";
import type { WeaponDefinition } from "../definitions/weaponDefinition";

export interface WeaponInstance extends ItemInstanceBase {
    definition: WeaponDefinition;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface WeaponInstanceDto extends ItemInstanceBaseDto {}