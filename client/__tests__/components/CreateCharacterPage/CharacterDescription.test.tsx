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

    it("allows the user to input their own physical and personality traits", async () => {
        const physicalInput: HTMLInputElement = screen.getByLabelText(/physical traits/i);
        const personalityInput: HTMLInputElement = screen.getByLabelText(/personality traits/i);
        
        await userEvent.type(physicalInput, "long, tan, and handsome");
        await userEvent.type(personalityInput, "bit of an arse");

        expect(physicalInput.value).toBe("long, tan, and handsome");
        expect(personalityInput.value).toBe("bit of an arse");
    });

    it("allows the user to randomly generate physical and personality traits based on their scores", async () => {
        const randomButtons: HTMLButtonElement[] = screen.getAllByLabelText(/randomize/i);

        await userEvent.click(randomButtons[0]);
        await userEvent.click(randomButtons[1]);
        const physicalTraitInput: HTMLInputElement = screen.getByLabelText(/physical traits/i);
        const personalityTraitInput: HTMLInputElement = screen.getByLabelText(/personality traits/i);
        
        expect(physicalTraitInput.value).toBeTruthy();
        expect(personalityTraitInput.value).toBeTruthy();
    });

    it("allows the user to input in the remaining fields", async () => {
        const idealsInput: HTMLInputElement = screen.getByLabelText(/ideals/i);
        const bondsInput: HTMLInputElement = screen.getByLabelText(/bonds/i);
        const flawsInput: HTMLInputElement = screen.getByLabelText(/flaws/i);

        await userEvent.type(idealsInput, "wants to just live a quiet life");
        await userEvent.type(bondsInput, "his dad");
        await userEvent.type(flawsInput, "likes hands a bit too much");

        expect(idealsInput.value).toBe("wants to just live a quiet life");
        expect(bondsInput.value).toBe("his dad");
        expect(flawsInput.value).toBe("likes hands a bit too much");
    });
});