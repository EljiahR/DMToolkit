import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import newCharacterReducer from "./newCharacterSlice";
import dmToolsReducuer from "./dmToolsSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        newCharacter: newCharacterReducer,
        dmTools: dmToolsReducuer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;