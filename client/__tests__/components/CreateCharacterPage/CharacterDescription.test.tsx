import { describe, it } from "vitest";
import CharacterDescription from "../../../src/components/CreateCharacterPage/CharacterDescription";
import { screen } from "@testing-library/react";
import renderWithStore from "../../renderOptions/renderWithStore";
import userEvent from "@testing-library/user-event";

describe("CharacterAbilityScores component", () => {
    beforeEach(() => {
        renderWithStore(<CharacterDescription />)
    })
    
    it("renders", () => {
        expect(screen.getByRole("heading", { name: /describe your characer/i})).toBeInTheDocument();
    });

    it("allows the user to change the character's name", async () => {
        const nameInput: HTMLInputElement = screen.getByLabelText(/name/i);

        await userEvent.type(nameInput, "John DnD");

        expect(nameInput.value).toBe("John DnD");
    });
})