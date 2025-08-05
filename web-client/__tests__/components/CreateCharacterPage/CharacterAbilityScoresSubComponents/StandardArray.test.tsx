import { describe, it } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StandardArray from "../../../../src/components/CreateCharacterPage/CharacterAbilityScoresSubComponents/StandardArray";
import renderWithStore from "../../../renderOptions/renderWithStore";

describe("StandardArray", () => {
    beforeEach(() => {
        renderWithStore(<StandardArray />);
    })
    
    it("renders", () => {
        expect(screen.getByRole("heading", { name: /standard array/i})).toBeInTheDocument();
    });

    it("allows the user to switch scores by tapping one then the one they wish to change", async () => {
        const strDiv = screen.getByText(/strength/i);
        const chaDiv = screen.getByText(/charisma/i);

        await userEvent.click(strDiv);
        await userEvent.click(chaDiv);

        expect(screen.getByText(/charisma: 15/i)).toBeInTheDocument();
        expect(screen.getByText(/strength: 8/i)).toBeInTheDocument();
    });

    it("allows the user to select and move scores with keyboard with either the space key or enter", async () => {
        
        await userEvent.keyboard('{tab}');
        await userEvent.keyboard('{tab}');
        await userEvent.keyboard('{enter}');
        await userEvent.keyboard('{arrowdown}');
        await userEvent.keyboard('{enter}');

        expect(screen.getByText(/strength: 14/i)).toBeInTheDocument();
    })

    // it also allows drag and drop but, goddam, not finding anything reasonable to test it atm
});