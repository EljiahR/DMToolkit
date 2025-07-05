import { Provider } from 'react-redux'
import { MemoryRouter } from "react-router";
import { render } from "@testing-library/react";
import { store } from '../../src/lib/redux/store';
import { AuthProvider } from '../../src/components/AuthProvider';

const renderWithAll = (ui: React.ReactElement, { initialEntries = ['/'], ...renderOptions } = {}) => {
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