import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CharacterCreationNavigationIndexes, CharacterDisplayNavigationOptions, UISlice } from "./types";
import type { RootState } from "./store";

const initialState: UISlice = {
    characterDisplayNavigation: "Overview",
    characterCreationNavigationIndex: 0,
    mobileMenuIsVisible: false
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
        },
        increaseCharacterCreationIndex: (state) => {
           if (state.characterCreationNavigationIndex < 6) {
                state.characterCreationNavigationIndex += 1;
           }
        },
        decreaseCharacterCreationIndex: (state) => {
           if (state.characterCreationNavigationIndex > 0) {
                state.characterCreationNavigationIndex -= 1;
           }
        },
        resetCharacterCreationIndex: (state) => {
            state.characterCreationNavigationIndex = 0;
        },
        setMobileMenuVisibility: (state, action: PayloadAction<boolean>) => {
            state.mobileMenuIsVisible = action.payload;
        }
    }
});

export const selectCharacterDisplay = (state: RootState) => {
    return state.ui.characterDisplayNavigation;
}

export const selectCharacterCreationIndex = (state: RootState) => {
    return state.ui.characterCreationNavigationIndex;
}

export const { setCharacterDisplay, setCharacterCreationIndex, increaseCharacterCreationIndex, decreaseCharacterCreationIndex, resetCharacterCreationIndex, setMobileMenuVisibility } = uiSlice.actions;
export default uiSlice.reducer;