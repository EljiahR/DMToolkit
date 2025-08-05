import { MemoryRouter } from "react-router";
import { render } from "@testing-library/react";

const renderWithRouter = (ui: React.ReactElement, { initialEntries = ['/'], ...renderOptions } = {}) => {
 return render(
    <MemoryRouter initialEntries={initialEntries}>
      {ui}
    </MemoryRouter>,
    renderOptions
 )
};

export default renderWithRouter;