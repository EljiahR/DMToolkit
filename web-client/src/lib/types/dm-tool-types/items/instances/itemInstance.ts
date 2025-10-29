import type { ItemInstanceBase, ItemInstanceBaseDto } from "../bases/itemInstanceBase";
import type { ItemDefinition } from "../definitions/itemDefinition";

export interface ItemInstance extends ItemInstanceBase {
    definition: ItemDefinition
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ItemInstanceDto extends ItemInstanceBaseDto {}