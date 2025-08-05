import { Provider } from 'react-redux'
import { render } from "@testing-library/react";
import authReducer from "../../src/lib/redux/authSlice";
import userReducer from "../../src/lib/redux/userSlice";
import newCharacterReducer from "../../src/lib/redux/selectedCharacterSlice";
import dmToolsReducuer from "../../src/lib/redux/dmToolsSlice";
import { configureStore } from '@reduxjs/toolkit';

const renderWithStore = (ui: React.ReactElement, { preloadedState = {}, store = configureStore({ 
    reducer: {
        auth: authReducer,
        user: userReducer,
        newCharacter: newCharacterReducer,
        dmTools: dmToolsReducuer
    }, preloadedState }), ...renderOptions } = {}) => {
 
    return render(
    <Provider store={store}>
        {ui}
    </Provider>,
    renderOptions
 )
};

export default renderWithStore;