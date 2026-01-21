import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { DMUser } from "../types/dm-tool-types/user/dmUser";
import type { RootState } from "./store";

const initialState: DMUser = {
    id: null,
    username: null,
    characters: []
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (_state, action: PayloadAction<DMUser>) => {
            return action.payload;
        },
        clearUser: (_state) => {
            return { id: null, username: null, characters: [] };
        }
    }
});

export const selectAllCharacters = (state: RootState) => state.user.characters;

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;