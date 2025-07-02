import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserSlice } from "./types";

const initialState: UserSlice = {
    username: null
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        clearUser: (state) => {
            state.username = null;
        }
    }
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;