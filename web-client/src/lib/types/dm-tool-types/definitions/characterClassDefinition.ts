import type { SubclassDefinitionDto } from "../characterClass";
import type { FeatGroupLevel, FeatGroupLevelDto } from "../relationships/featGroupLevel";
import type { SubclassDefinition } from "./subclassDefinition";

export interface CharacterClassDefinition {
    id: string;
    name: string;
    description: string;
    hitDie: number;
    fixedHp: number;
    subclasses: SubclassDefinition[]
    featTables: FeatGroupLevel[];
    itemSetA: null;
    itemSetB: null;
    defaultStr: number;
    defaultDex: number;
    defaultCon: number;
    defaultInt: number;
    defaultWis: number;
    defaultCha: number;
}

export interface CharacterClassDefinitionDto {
    id: string;
    name: string;
    description: string;
    hitDie: number;
    fixedHp: number;
    subclasses: SubclassDefinitionDto[]
    featTables: FeatGroupLevelDto[];
    itemSetAIds: string[];
    itemSetBIds: string[];
    defaultStr: number;
    defaultDex: number;
    defaultCon: number;
    defaultInt: number;
    defaultWis: number;
    defaultCha: number;
}