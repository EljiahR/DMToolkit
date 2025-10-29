import type { Worth } from "../types/dm-tool-types/items/bases/worth";
import type { ItemDefinitionBaseQuantity } from "../types/dm-tool-types/relationships/itemDefinitionBaseQuantity";

export const customConcat = (strings: string[], conjunction: string = "and") => {
    if (strings.length < 1) {
        return "";
    }
    if (strings.length == 1) {
        return strings[0];
    }
    if (strings.length == 2) {
        return strings[0] + " " + conjunction + " " + strings[1];
    }


    return strings.slice(0, -1).join(", ") + " " + conjunction + " " + strings[strings.length - 1]; 
}

export const printItemSet = (itemTables: ItemDefinitionBaseQuantity[]): string => {
    if (!itemTables) return "";

    return customConcat(itemTables.reduce((itemStrings: string[], itemTable) => {
        if (itemTable.quantity > 1) {
            itemStrings.push(`${itemTable.quantity} ${itemTable.itemDefinitionBase.name}s`);
        } else {
            itemStrings.push(itemTable.itemDefinitionBase.name);
        }

        return itemStrings;
    }, []));
}

export const printWorth = (worthObject: Worth) => {
    const worthStrings = [];

    if (worthObject.cp.amount > 0) worthStrings.push(`${worthObject.cp.amount} CP`);
    if (worthObject.sp.amount > 0) worthStrings.push(`${worthObject.sp.amount} SP`);
    if (worthObject.ep.amount > 0) worthStrings.push(`${worthObject.ep.amount} EP`);
    if (worthObject.gp.amount > 0) worthStrings.push(`${worthObject.gp.amount} GP`);
    if (worthObject.pp.amount > 0) worthStrings.push(`${worthObject.pp.amount} PP`);

    return customConcat(worthStrings);
}
