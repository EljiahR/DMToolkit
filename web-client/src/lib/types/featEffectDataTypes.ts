import type { FeatEffect } from "./dmToolTypes";


export interface AbilityScoreBonusFeatEffectData {
    statId: "str" | "dex" | "con" | "int" | "wis" | "cha";
    amount: number;
    cap: number;
}

export interface InitiativeBonusFeatEffectData {
    amount: number;
}
