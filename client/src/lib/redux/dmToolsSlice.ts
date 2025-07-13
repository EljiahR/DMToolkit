import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { DMToolsSlice } from "./types";

const initialState: DMToolsSlice = {
    characterClass: [],
    background: [],
    species: [],
    lineages: [],
};

export const dmToolsSlice = createSlice({
    name: "dmTools",
    initialState,
    reducers: {
        setAll: (state, action: PayloadAction<DMToolsSlice>) => {
            state = action.payload;
        }
    }
});

export const { setAll } = dmToolsSlice.actions;
export default dmToolsSlice.reducer;