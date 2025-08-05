import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import selectedCharacterReducer from "./selectedCharacterSlice";
import dmToolsReducuer from "./dmToolsSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        selectedCharacter: selectedCharacterReducer,
        dmTools: dmToolsReducuer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;