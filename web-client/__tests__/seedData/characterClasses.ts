import type { CharacterClassDefinition } from "../../src/lib/types/dm-tool-types/definitions/characterClassDefinition";
import { barbarianDescription, wizardDescription } from "./descriptions";

export const characterClasses: CharacterClassDefinition[] = [
    {
        id: "beefcake",
        name: "Barbarian",
        description: barbarianDescription,
        featTables: [],
        subclassDefinitions: [],
        defaultStr: 15,
        defaultDex: 13,
        defaultCon: 14,
        defaultInt: 12,
        defaultWis: 10,
        defaultCha: 8,
        hitDie: 12,
        fixedHp: 7,
        itemSetA: null,
        itemSetB: null
    },
    {
        id: "cheating",
        name: "Wizard",
        description: wizardDescription,
        featTables: [],
        subclassDefinitions: [],
        defaultStr: 12,
        defaultDex: 13,
        defaultCon: 14,
        defaultInt: 15,
        defaultWis: 10,
        defaultCha: 8,
        hitDie: 6,
        fixedHp: 4,
        itemSetA: null,
        itemSetB: null
    }
];