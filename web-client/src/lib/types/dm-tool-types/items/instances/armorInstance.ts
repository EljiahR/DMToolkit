import type { ItemInstanceBase, ItemInstanceBaseDto } from "../bases/itemInstanceBase";
import type { ArmorDefinition } from "../definitions/armorDefinition";

export interface ArmorInstance extends ItemInstanceBase {
    definition: ArmorDefinition
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ArmorInstanceDto extends ItemInstanceBaseDto {}