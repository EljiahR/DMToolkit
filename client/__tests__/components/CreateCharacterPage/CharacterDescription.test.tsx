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

        const firstPhysicalTrait = screen.getByLabelText(/physical traits/i)
    });
})