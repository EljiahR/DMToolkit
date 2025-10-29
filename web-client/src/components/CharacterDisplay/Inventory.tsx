import { useAppSelector } from "../../lib/redux/hooks"
import { selectAllEquippedItems, selectAllNonEquippedItems } from "../../lib/redux/selectedCharacterSlice"
import type { ItemInstanceBase } from "../../lib/types/dm-tool-types/items/bases/itemInstanceBase";

const Inventory = () => {
    const equipment = useAppSelector(selectAllEquippedItems);
    const inventory = useAppSelector(selectAllNonEquippedItems);
    
    return (
        <div id="inventory-section">
            <div id="equipped">
                {equipment.map((item) => {
                    return (
                        <ItemDisplay item={item} />
                    )
                })}
            </div>
            <div id="inventory">
                {inventory.map((item) => {
                    return (
                        <ItemDisplay item={item} />
                    )
                })}     
            </div>
        </div>
    )
};

interface ItemDisplayProps {
    item: ItemInstanceBase;
}

const ItemDisplay = ({item}: ItemDisplayProps) => {
    return (
        <div className="item-display">
            <p>{item.definition.name}</p>
        </div>
    )
}

export default Inventory;
