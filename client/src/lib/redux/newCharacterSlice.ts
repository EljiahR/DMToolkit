import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { NewCharacterSlice } from "./types";
import type { AbilityScores, BackgroundBase, CharacterClassBase, LineageBase, SpeciesBase } from "../types/dmToolTypes";
import { rollStat } from "../dm-tools/statRoll";
import { backgroundBaseToInstance } from "../dm-tools/baseToInstanceConverters";

export const standardScores: AbilityScores = {
    "str": {
        id: "str",
        name: "Strength",
        amount: 15,
        bonus: 0
    },
    "dex": {
        id: "dex",
        name: "Dexterity",
        amount: 14,
        bonus: 0
    },
    "con": {
        id: "con",
        name: "Constitution",
        amount: 13,
        bonus: 0
    },
    "int": {
        id: "int",
        name: "Intelligence",
        amount: 12,
        bonus: 0
    },
    "wis": {
        id: "wis",
        name: "Wisdom",
        amount: 10,
        bonus: 0
    },
    "cha": {
        id: "cha",
        name: "Charisma",
        amount: 8,
        bonus: 0
}};

const initialState: NewCharacterSlice = {
    alignment: "unaligned",
    characterClassBase: null,
    backgroundBase: null,
    backgroundInstance: {
        name: "",
        description: "",
        abilityScores: ["", ""],
        features: [],
        skillProficiencies: [],
        baseId: ""
    },
    speciesBase: null,
    lineageBase: null,
    scores: standardScores
};

export const newCharacterSlice = createSlice({
    name: "newCharacter",
    initialState,
    reducers: {
        setAlignment: (state, action: PayloadAction<string>) => {
            state.alignment = action.payload;
        },
        setCharacterClassBase: (state, action: PayloadAction<CharacterClassBase>) => {
            state.characterClassBase = action.payload;
        },
        setBackgroundBase: (state, action: PayloadAction<BackgroundBase>) => {
            state.backgroundBase = action.payload;
            state.backgroundInstance = backgroundBaseToInstance(action.payload);
        },
        setBackgroundScores: (state, action: PayloadAction<{scoreId: string, index: number}>) => {
            if (state.backgroundInstance) {
                if (state.backgroundInstance.abilityScores[action.payload.index] != "") {
                    state.scores[action.payload.scoreId].bonus = 0;
                }

                state.backgroundInstance.abilityScores[action.payload.index] = action.payload.scoreId;
                state.scores[action.payload.scoreId].bonus = 2 - action.payload.index;
            }
        },
        setSpeciesBase: (state, action: PayloadAction<SpeciesBase>) => {
            state.speciesBase = action.payload;
            state.lineageBase = action.payload.lineages[0];
        },
        setLineageBase: (state, action: PayloadAction<LineageBase>) => {
            state.lineageBase = action.payload;
        },
        setScore: (state, action: PayloadAction<{scoreId: string, amount: string}>) => {
            var filteredAmount = parseInt(action.payload.amount);
            filteredAmount = filteredAmount > 20 ? 20 : filteredAmount < 1 ? 1 : filteredAmount;
            state.scores[action.payload.scoreId].amount = filteredAmount;
        },
        setScores: (state, action: PayloadAction<AbilityScores>) => {
            state.scores = action.payload;
        },
        swapScores: (state, action: PayloadAction<{scoreIdA: string, scoreIdB: string}>) => {
            const { scoreIdA, scoreIdB } = action.payload;
            [state.scores[scoreIdA].amount, state.scores[scoreIdB].amount] = [state.scores[scoreIdB].amount, state.scores[scoreIdA].amount]
        },
        setScoresToStandard: (state) => {
            state.scores.str.amount = 15;
            state.scores.dex.amount = 14;
            state.scores.con.amount = 13;
            state.scores.int.amount = 12;
            state.scores.wis.amount = 10;
            state.scores.cha.amount = 8;
        },
        setScoresToBase: (state) => {
            state.scores.str.amount = 8;
            state.scores.dex.amount = 8;
            state.scores.con.amount = 8;
            state.scores.int.amount = 8;
            state.scores.wis.amount = 8;
            state.scores.cha.amount = 8;
        },
        setScoresToMinimum: (state) => {
            state.scores.str.amount = 1;
            state.scores.dex.amount = 1;
            state.scores.con.amount = 1;
            state.scores.int.amount = 1;
            state.scores.wis.amount = 1;
            state.scores.cha.amount = 1;
        },
        setScoreToRandom: (state, action: PayloadAction<string>) => {
            state.scores[action.payload].amount = rollStat();
        },
        setScoresToRandom: (state) => {
            state.scores.str.amount = rollStat();
            state.scores.dex.amount = rollStat();
            state.scores.con.amount = rollStat();
            state.scores.int.amount = rollStat();
            state.scores.wis.amount = rollStat();
            state.scores.cha.amount = rollStat();
        },
        addOneToScore: (state, action: PayloadAction<string>) => {
            state.scores[action.payload].amount += 1;
        },
        subtractOneFromScore: (state, action: PayloadAction<string>) => {
            state.scores[action.payload].amount -= 1;
        },
        setScoresToClassDefault: (state, action: PayloadAction<number[] | undefined>) => {
            if (state.scores == null) {
                state.scores = standardScores;
            }
            state.scores.str.amount = action.payload ? action.payload[0] : state.characterClassBase?.defaultScoreArray[0] ?? 8;
            state.scores.dex.amount = action.payload ? action.payload[1] : state.characterClassBase?.defaultScoreArray[1] ?? 8;
            state.scores.con.amount = action.payload ? action.payload[2] : state.characterClassBase?.defaultScoreArray[2] ?? 8;
            state.scores.int.amount = action.payload ? action.payload[3] : state.characterClassBase?.defaultScoreArray[3] ?? 8;
            state.scores.wis.amount = action.payload ? action.payload[4] : state.characterClassBase?.defaultScoreArray[4] ?? 8;
            state.scores.cha.amount = action.payload ? action.payload[5] : state.characterClassBase?.defaultScoreArray[5] ?? 8;
        }
    }
});

export const { setAlignment, setCharacterClassBase, setBackgroundBase, setBackgroundScores, setSpeciesBase, setLineageBase, setScore, setScores, swapScores, setScoresToStandard, setScoresToBase, setScoresToMinimum, setScoreToRandom, setScoresToRandom, addOneToScore, subtractOneFromScore, setScoresToClassDefault } = newCharacterSlice.actions;
export default newCharacterSlice.reducer;