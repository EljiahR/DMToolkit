import { EquippableItemTypes } from "../../lib/dm-tools/staticElements";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks"
import { selectAllEquippedItems, selectAllNonEquippedItems, setItemEquipped } from "../../lib/redux/selectedCharacterSlice"
import type { ItemInstanceBase } from "../../lib/types/dm-tool-types/items/bases/itemInstanceBase";

const Inventory = () => {
    const dispatch = useAppDispatch();
    const equipment = useAppSelector(selectAllEquippedItems);
    const inventory = useAppSelector(selectAllNonEquippedItems);
    
    const handleItemEquipped = (id: string) => {
        dispatch(setItemEquipped(id));
    }

    return (
        <div id="inventory-section" className="flex flex-col gap-3 items-center">
            <div id="equipped" className="card flex flex-col gap-1">
                <h3>Equipped</h3>
                <hr />
                {
                    equipment.length > 0 ?
                        <div id="equipped-display" className="flex flex-col gap-1">
                            {equipment.map((item) => {
                                return (
                                    <ItemDisplay item={item} handleItemEquipped={handleItemEquipped} />
                                )
                            })}
                        </div>
                    :
                        <p>No items equipped.</p>
                }
                
            </div>
            <div id="inventory" className="card flex flex-col gap-1">
                <h3>Inventory</h3>
                <hr />
                {
                    inventory.length > 0 ?
                        <div id="inventory-display" className="flex flex-col gap-1">
                            {inventory.map((item) => {
                                return (
                                    <ItemDisplay item={item} handleItemEquipped={handleItemEquipped} />
                                )
                            })}  
                        </div>
                    :
                        <p>No items in inventory.</p>
                }
                
                   
            </div>
        </div>
    )
};

interface ItemDisplayProps {
    item: ItemInstanceBase;
    handleItemEquipped: (id: string) => void;
}

const ItemDisplay = ({item, handleItemEquipped}: ItemDisplayProps) => {
    
    return (
        <div className="item-display p-1 flex justify-between border border-gray rounded items-center shadow-sm">
            <p>{item.definition.name}</p>
            {EquippableItemTypes.includes(item.definition.itemType) &&
                <button className={`border rounded p-1 ${item.isEquipped ? 'bg-red-500' : 'bg-blue-300'}`} onClick={() => handleItemEquipped(item.id)}>{item.isEquipped ? "Unequip" : "Equip"}</button>
            }
        </div>
    )
}

export default Inventory;
