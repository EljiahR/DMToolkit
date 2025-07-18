import { describe, it } from "vitest";
import CharacterAlignment from "../../../src/components/CreateCharacterPage/CharacterAlignment";
import { screen } from "@testing-library/react";
import renderWithStore from "../../renderOptions/renderWithStore";
import userEvent from "@testing-library/user-event";

describe("CharacterAbilityScores component", () => {
    beforeEach(() => {
        renderWithStore(<CharacterAlignment />);
    });
    
    it("renders with the default unaligned option selected", () => {
        const unalignedOption: HTMLInputElement = screen.getByLabelText(/unaligned/i);
        
        expect(screen.getByText(/alignment/i)).toBeInTheDocument();
        expect(unalignedOption).toBeChecked();
    });

    it("allows the user to select a different alignment", async () => {
        const lawfulGoodOption: HTMLInputElement = screen.getByLabelText(/lawful good/i);

        await userEvent.click(lawfulGoodOption);

        expect(lawfulGoodOption).toBeChecked();
    });
});