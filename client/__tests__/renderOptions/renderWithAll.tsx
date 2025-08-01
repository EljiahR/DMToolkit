import { Provider } from 'react-redux'
import { MemoryRouter } from "react-router";
import { render } from "@testing-library/react";
import authReducer from "../../src/lib/redux/authSlice";
import userReducer from "../../src/lib/redux/userSlice";
import newCharacterReducer from "../../src/lib/redux/selectedCharacterSlice";
import dmToolsReducuer from "../../src/lib/redux/dmToolsSlice";import { AuthProvider } from '../../src/components/AuthProvider';
import { configureStore } from '@reduxjs/toolkit';

const renderWithAll = (ui: React.ReactElement, { initialEntries = ['/'], preloadedState = {}, store = configureStore({ 
    reducer: {
        auth: authReducer,
        user: userReducer,
        newCharacter: newCharacterReducer,
        dmTools: dmToolsReducuer
    }, preloadedState }), ...renderOptions } = {}) => {
 return render(
    <Provider store={store}>
        <AuthProvider>
            <MemoryRouter initialEntries={initialEntries}>
                {ui}
            </MemoryRouter>
        </AuthProvider>
        
    </Provider>,
    renderOptions
 )
};

export default renderWithAll;