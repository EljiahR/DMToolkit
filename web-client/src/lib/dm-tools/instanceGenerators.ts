import type { ItemInstanceBase } from "../types/dm-tool-types/items/bases/itemInstanceBase";
import type { ArmorInstance } from "../types/dm-tool-types/items/instances/armorInstance";
import type { ItemInstance } from "../types/dm-tool-types/items/instances/itemInstance";
import type { WeaponInstance } from "../types/dm-tool-types/items/instances/weaponInstance";
import type { ItemDefinitionBaseQuantity } from "../types/dm-tool-types/relationships/itemDefinitionBaseQuantity";


// May move this to the backend
export const itemDefinitionTableToInstance = (itemTable: ItemDefinitionBaseQuantity): ItemInstanceBase => {
    let item: ItemInstance | WeaponInstance | ArmorInstance;

    switch (itemTable.itemDefinitionBase.itemType) {
        case "Weapon":
            item = {
                definition: itemTable.itemDefinitionBase
            } as WeaponInstance;
            break;

        case "Armor":
            item = {
                definition: itemTable.itemDefinitionBase
            } as ArmorInstance;
            
            break;
        
        default:
            item = {
                definition: itemTable.itemDefinitionBase
            } as ItemInstance;
    }

    
    item.id = itemTable.itemDefinitionBase.name + itemTable.quantity;
    item.itemType = itemTable.itemDefinitionBase.itemType;
    item.quantity = itemTable.quantity;
    item.isEquipped = false;    

    return item;
};