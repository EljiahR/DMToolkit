import type { ItemInstanceBase, ItemInstanceBaseDto } from "../bases/itemInstanceBase";
import type { ArmorDefinition } from "../definitions/armorDefinition";

export interface ArmorInstance extends ItemInstanceBase {
    definition: ArmorDefinition
}

export interface ArmorInstanceDto extends ItemInstanceBaseDto {}