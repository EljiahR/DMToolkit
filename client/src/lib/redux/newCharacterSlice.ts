import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { NewCharacterSlice } from "./types";
import type { AbilityScores } from "../../pages/CreatePlayerCharacterPage";

const standardScores: AbilityScores = {
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
    scores: standardScores
};

export const newCharacterSlice = createSlice({
    name: "newCharacter",
    initialState,
    reducers: {
        setScores: (state, action: PayloadAction<AbilityScores>) => {
            state.scores = action.payload;
        }
    }
});

export const { setScores } = newCharacterSlice.actions;
export default newCharacterSlice.reducer;