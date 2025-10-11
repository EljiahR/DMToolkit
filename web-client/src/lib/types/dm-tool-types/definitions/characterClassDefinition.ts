import type { FeatGroupLevel, FeatGroupLevelDto } from "../relationships/featGroupLevel";
import type { SubclassDefinition, SubclassDefinitionDto } from "./subclassDefinition";

export interface CharacterClassDefinition {
    id: string;
    name: string;
    description: string;
    hitDie: number;
    fixedHp: number;
    subclassDefinitions: SubclassDefinition[]
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
    subclassDefinitions: SubclassDefinitionDto[]
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