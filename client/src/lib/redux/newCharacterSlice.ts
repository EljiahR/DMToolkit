import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { NewCharacterSlice } from "./types";
import type { AbilityScores } from "../../pages/CreatePlayerCharacterPage";
import type { BackgroundBase, LineageBase, SpeciesBase } from "../types/dmToolTypes";

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
    backgroundBase: null,
    speciesBase: null,
    lineageBase: null,
    scores: standardScores
};

export const newCharacterSlice = createSlice({
    name: "newCharacter",
    initialState,
    reducers: {
        setBackgroundBase: (state, action: PayloadAction<BackgroundBase>) => {
            state.backgroundBase = action.payload;
        },
        setSpeciesBase: (state, action: PayloadAction<SpeciesBase>) => {
            state.speciesBase = action.payload;
        },
        setLineageBase: (state, action: PayloadAction<LineageBase>) => {
            state.lineageBase = action.payload;
        },
        setScores: (state, action: PayloadAction<AbilityScores>) => {
            state.scores = action.payload;
        }
    }
});

export const { setBackgroundBase, setSpeciesBase, setLineageBase, setScores } = newCharacterSlice.actions;
export default newCharacterSlice.reducer;