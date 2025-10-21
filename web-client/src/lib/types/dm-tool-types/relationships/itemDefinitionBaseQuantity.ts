import type { ItemDefinitionBase } from "../items/bases/itemDefinitionBase";

export interface ItemDefinitionBaseQuantity {
    itemDefinitionBase: ItemDefinitionBase;
    quantity: number;
}

export interface ItemDefinitionBaseQuantityDto {
    itemDefinitionBaseId: string;
    quantity: number;
}