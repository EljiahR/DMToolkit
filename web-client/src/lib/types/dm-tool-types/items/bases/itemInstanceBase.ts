import type { ItemDefinitionBase } from "./itemDefinitionBase";

export interface ItemInstanceBase {
    id: string;
    itemType: string;
    quantity: number;
    isEquipped: boolean;
    definition: ItemDefinitionBase;
}

export interface ItemInstanceBaseDto {
    id: string;
    itemType: string;
    quantity: number;
    isEquipped: boolean;
    definitionId: string;
}