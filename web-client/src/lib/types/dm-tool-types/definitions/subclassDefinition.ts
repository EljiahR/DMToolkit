import type { FeatGroupLevel, FeatGroupLevelDto } from "../relationships/featGroupLevel";

export interface SubclassDefinition {
    id: string;
    name: string;
    description: string;
    featTables: FeatGroupLevel[];
}

export interface SubclassDefinitionDto {
    id: string;
    name: string;
    description: string;
    featTables: FeatGroupLevelDto[];
}