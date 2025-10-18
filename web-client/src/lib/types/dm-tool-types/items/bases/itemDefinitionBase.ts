import type { Worth, WorthDto } from "../../items";

export interface ItemDefinitionBase {
    id: string;
    name: string;
    description: string;
    weight: number;
    itemType: string;
    worth: Worth;
}

export interface ItemDefinitionBaseDto {
    id: string;
    name: string;
    description: string;
    weight: number;
    itemType: string;
    worth: WorthDto;
}