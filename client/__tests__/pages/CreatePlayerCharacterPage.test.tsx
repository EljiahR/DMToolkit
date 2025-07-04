import { describe, it } from "vitest";
import { screen } from '@testing-library/react';
import CreatePlayerCharacterPage from "../../src/pages/CreatePlayerCharacterPage";
import renderWithAll from "../renderWithAll";

describe("CreatePlayerCharacter page", () => {
    it("renders", () => {
        renderWithAll(<CreatePlayerCharacterPage />, { initialEntries: ['/']});

        expect(screen.getByText(/create a new player character/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /create a character/i})).toBeInTheDocument();
    });
   
    it("displays a functioning section for selecting a class", () => {
        renderWithAll(<CreatePlayerCharacterPage />, { initialEntries: ['/']});

        expect(screen.getAllByRole("combobox", { name: /select a class/i})).toBeInTheDocument();
    });
});