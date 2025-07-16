import { describe } from "vitest";
import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import renderWithStore from "../../../renderOptions/renderWithStore";
import BonusAbilityScores from "../../../../src/components/CreateCharacterPage/CharacterAbilityScoresSubComponents/BonusAbilityScores";
import { characterBackgrounds } from "../../../seedData/characterBackgrounds";

describe("BonusAbilityScores", () => {
    beforeEach(() => {
        renderWithStore(<BonusAbilityScores />, { preloadedState: { dmTools: { backgrounds: characterBackgrounds } } });
    })

    it("renders", () => {
        expect(screen.getByLabelText(/\+2/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/\+1/i)).toBeInTheDocument();
    });

    it("allows the user to change what ability score gets what bonus", async () => {
        const plusTwoBox: HTMLSelectElement = screen.getByLabelText(/\+2/i);
        const plusOneBox: HTMLSelectElement = screen.getByLabelText(/\+1/i);

        await userEvent.selectOptions(plusTwoBox, "cha");
        await userEvent.selectOptions(plusOneBox, "int");

        expect(plusTwoBox.value).toBe("cha");
        expect(plusOneBox.value).toBe("int");
    });

    it("does not allow the user to select the same score in both boxes", async () => {
        const plusTwoBox: HTMLSelectElement = screen.getByLabelText(/\+2/i);
        const plusOneBox: HTMLSelectElement = screen.getByLabelText(/\+1/i);

        await userEvent.selectOptions(plusTwoBox, "cha");
        await userEvent.selectOptions(plusOneBox, "cha");

        expect(plusTwoBox.value).toBe("cha");
        expect(plusOneBox.value).toBe("");
    });
});