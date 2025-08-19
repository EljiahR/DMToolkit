import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CharacterDisplayNavigationOptions, UISlice } from "./types";
import type { RootState } from "./store";

const initialState: UISlice = {
    characterDisplayNavigation: "Overview"
};

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setCharacterDisplay: (state, action: PayloadAction<CharacterDisplayNavigationOptions>) => {
            if (state.characterDisplayNavigation != action.payload) {
                state.characterDisplayNavigation = action.payload
            }
        }
    }
});

export const selectCharacterDisplay = (state: RootState) => {
    return state.ui.characterDisplayNavigation;
}

export const { setCharacterDisplay } = uiSlice.actions;
export default uiSlice.reducer;