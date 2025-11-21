import type { FeatGroupLevel, FeatGroupLevelDto } from "../relationships/featGroupLevel";
import type { ItemDefinitionBaseQuantity, ItemDefinitionBaseQuantityDto } from "../relationships/itemDefinitionBaseQuantity";
import type { SubclassDefinition, SubclassDefinitionDto } from "./subclassDefinition";

export interface CharacterClassDefinition {
    id: string;
    name: string;
    description: string;
    hitDie: number;
    fixedHp: number;
    subclassDefinitions: SubclassDefinition[]
    featTables: FeatGroupLevel[];
    startingGp: number;
    itemDefinitionBaseQuantities: ItemDefinitionBaseQuantity[];
    defaultStr: number;
    defaultDex: number;
    defaultCon: number;
    defaultInt: number;
    defaultWis: number;
    defaultCha: number;
    levelOneSlots: number[] | null;
    levelTwoSlots: number[] | null;
    levelThreeSlots: number[] | null;
    levelFourSlots: number[] | null;
    levelFiveSlots: number[] | null;
    levelSixSlots: number[] | null;
    levelSevenSlots: number[] | null;
    levelEightSlots: number[] | null;
    levelNineSlots: number[] | null;
}

export interface CharacterClassDefinitionDto {
    id: string;
    name: string;
    description: string;
    hitDie: number;
    fixedHp: number;
    subclassDefinitions: SubclassDefinitionDto[]
    featTables: FeatGroupLevelDto[];
    startingGp: number;
    itemDefinitionBaseQuantities: ItemDefinitionBaseQuantityDto[];
    defaultStr: number;
    defaultDex: number;
    defaultCon: number;
    defaultInt: number;
    defaultWis: number;
    defaultCha: number;
    levelOneSlots: number[] | null;
    levelTwoSlots: number[] | null;
    levelThreeSlots: number[] | null;
    levelFourSlots: number[] | null;
    levelFiveSlots: number[] | null;
    levelSixSlots: number[] | null;
    levelSevenSlots: number[] | null;
    levelEightSlots: number[] | null;
    levelNineSlots: number[] | null;
}