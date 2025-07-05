import { describe, it } from "vitest";
import { screen } from '@testing-library/react';
import CreatePlayerCharacterPage from "../../src/pages/CreatePlayerCharacterPage";
import renderWithAll from "../renderOptions/renderWithAll";

describe("CreatePlayerCharacter page", () => {
    it("renders", () => {
        renderWithAll(<CreatePlayerCharacterPage />, { initialEntries: ['/']});

        expect(screen.getByText(/create a new player character/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /start/i})).toBeInTheDocument();
    });
});