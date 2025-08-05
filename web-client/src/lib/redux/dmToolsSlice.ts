import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { DMToolsSlice } from "./types";

const initialState: DMToolsSlice = {
    characterClasses: [],
    backgrounds: [],
    species: [],
    lineages: [],
};

export const dmToolsSlice = createSlice({
    name: "dmTools",
    initialState,
    reducers: {
        // @ts-ignore
        setAll: (state, action: PayloadAction<DMToolsSlice>) => {
            state = action.payload;
        }
    }
});

export const { setAll } = dmToolsSlice.actions;
export default dmToolsSlice.reducer;