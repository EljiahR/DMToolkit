import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { DMToolsSlice } from "./types";

const initialState: DMToolsSlice = {
    characterClassDefinitions: [],
    backgroundDefinitions: [],
    speciesDefinitions: [],
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