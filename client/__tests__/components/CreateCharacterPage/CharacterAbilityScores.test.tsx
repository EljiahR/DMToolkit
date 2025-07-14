import { describe, it } from "vitest";
import CharacterAbilityScores from "../../../src/components/CreateCharacterPage/CharacterAbilityScores";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { characterClasses } from "../../seedData/characterClasses";
import renderWithStore from "../../renderOptions/renderWithStore";

describe("CharacterAbilityScores component", () => {

    beforeEach(() => {
        renderWithStore(<CharacterAbilityScores />, { preloadedState: { dmTools: { characterClasses } }});
    })
    
    it("renders with the standard array as default", () => {
        expect(screen.getByText(/ability scores/i)).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: /standard array/i })).toBeInTheDocument();
    });

    it("allows the user to change which method they use to get their scores", async () => {
        const methodBox = screen.getByLabelText(/select the method/i);

        await userEvent.selectOptions(methodBox, "random");

        expect(screen.getByRole("heading", { name: /random roll/i })).toBeInTheDocument();
    });
})