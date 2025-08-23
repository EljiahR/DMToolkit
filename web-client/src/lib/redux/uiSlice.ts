import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CharacterCreationNavigationIndexes, CharacterDisplayNavigationOptions, UISlice } from "./types";
import type { RootState } from "./store";

const initialState: UISlice = {
    characterDisplayNavigation: "Overview",
    characterCreationNavigationIndex: 0
};

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setCharacterDisplay: (state, action: PayloadAction<CharacterDisplayNavigationOptions>) => {
            if (state.characterDisplayNavigation != action.payload) {
                state.characterDisplayNavigation = action.payload
            }
        },
        setCharacterCreationIndex: (state, action: PayloadAction<CharacterCreationNavigationIndexes>) => {
            if (state.characterCreationNavigationIndex != action.payload) {
                state.characterCreationNavigationIndex = action.payload;
            }
        }
    }
});

export const selectCharacterDisplay = (state: RootState) => {
    return state.ui.characterDisplayNavigation;
}

export const selectCharacterCreationIndex = (state: RootState) => {
    return state.ui.characterCreationNavigationIndex;
}

export const { setCharacterDisplay, setCharacterCreationIndex } = uiSlice.actions;
export default uiSlice.reducer;