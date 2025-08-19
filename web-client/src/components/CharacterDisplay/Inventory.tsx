import { useAppSelector } from "../../lib/redux/hooks"
import { selectAllEquippedItems, selectNonEquippedItems } from "../../lib/redux/selectedCharacterSlice"
import type { AllItemTypes } from "../../lib/types/dm-tool-types/items";

export default function() {
    const equipment = useAppSelector(selectAllEquippedItems);
    const inventory = useAppSelector(selectNonEquippedItems);
    
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
    item: AllItemTypes
}

const ItemDisplay = ({item}: ItemDisplayProps) => {
    return (
        <div className="item-display">
            <p>{item.name}</p>
        </div>
    )
}
