import { DataType } from "../enums/dataType";

export const EffectDataTypes: Record<DataType, Other | AbilityScoreBonus | SimpleBonus> = {
    [DataType.Other]: {},
    [DataType.AbilityScoreBonus]: { scoreAbbreviation: "", bonusAmount: 0 },
    [DataType.InitiativeBonus]: { bonusAmount: 0} as SimpleBonus,
    [DataType.PassivePerceptionBonus]: { bonusAmount: 0 } as SimpleBonus
}

export interface Other {

}

export interface AbilityScoreBonus {
    "scoreAbbreviation": string;
    "bonusAmount": number;
}

export interface SimpleBonus {
    "bonusAmount": number;
}
