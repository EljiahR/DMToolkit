import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import selectedCharacterReducer from "./selectedCharacterSlice";
import uiReducer from "./uiSlice";
import dmToolsReducuer from "./dmToolsSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: "root",
    storage
}



export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        selectedCharacter: persistReducer(persistConfig, selectedCharacterReducer),
        dmTools: persistReducer(persistConfig, dmToolsReducuer),
        ui: uiReducer
    }
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;