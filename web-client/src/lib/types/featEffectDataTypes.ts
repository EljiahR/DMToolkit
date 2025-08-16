export interface AbilityScoreBonusFeatEffectData {
    statId: "str" | "dex" | "con" | "int" | "wis" | "cha";
    amount: number;
    cap: number;
}

export interface SimpleBonusFeatEffectData {
    amount: number;
}
