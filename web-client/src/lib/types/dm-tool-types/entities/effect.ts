import type { DataType } from "../enums/dataType";
import type { OriginType } from "../enums/originType";

export interface Effect {
    id: string;
    title: string;
    description: string;
    originType: OriginType;
    dataType: DataType;
    data: Record<string, any>;
}

export interface EffectDto extends Effect {}